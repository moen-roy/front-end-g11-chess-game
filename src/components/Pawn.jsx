import React from "react";
import { useState } from "react";

import BoardComponent from "../components/BoardComponents";
import pawn from "../assets/images/Pawn.png";   // White pawn image
import pawn2 from "../assets/images/Pawn2.png"; // Black pawn image
import "./BoardComponents.css";

const PawnComponent = () => {
  // Initialize white pawns on row 6 (2nd to last row)
  const [whitePawns, setWhitePawns] = useState(
    Array.from({ length: 8 }, (_, col) => ({ row: 6, col }))
  );

  // Initialize black pawns on row 1 (2nd row)
  const [blackPawns, setBlackPawns] = useState(
    Array.from({ length: 8 }, (_, col) => ({ row: 1, col }))
  );

  // Holds the currently selected pawn (if any)
  const [selected, setSelected] = useState(null);

  // Track whose turn it is
  const [turn, setTurn] = useState("white");

  // Handle clicks on the board
  const handleClick = (row, col) => {
    if (!selected) {
      // No pawn selected: check if user clicked on their own pawn
      const pawns = turn === "white" ? whitePawns : blackPawns;
      const index = pawns.findIndex(p => p.row === row && p.col === col);
      if (index !== -1) {
        setSelected({ row, col, index }); // Select the pawn
      }
      return;
    }

    // A pawn is already selected: evaluate move
    const direction = turn === "white" ? -1 : 1;      // White moves up, black moves down
    const startRow = turn === "white" ? 6 : 1;        // Starting row for each color
    const rowDiff = row - selected.row;
    const colDiff = col - selected.col;

    const isForward = colDiff === 0;
    const isOneStep = rowDiff === direction;
    const isTwoStep = selected.row === startRow && rowDiff === 2 * direction;

    // Check for diagonal capture
    const opponentPawns = turn === "white" ? blackPawns : whitePawns;
    const targetOccupiedByOpponent = opponentPawns.some(
      p => p.row === row && p.col === col
    );
    const isDiagonalCapture =
      Math.abs(colDiff) === 1 && rowDiff === direction && targetOccupiedByOpponent;

    if ((isForward && (isOneStep || isTwoStep)) || isDiagonalCapture) {
      // Valid move: update board
      const update = { row, col };

      if (turn === "white") {
        const newPawns = [...whitePawns];
        newPawns[selected.index] = update;
        setWhitePawns(newPawns);

        // If capturing, remove black pawn
        if (isDiagonalCapture) {
          setBlackPawns(prev =>
            prev.filter(p => !(p.row === row && p.col === col))
          );
        }
      } else {
        const newPawns = [...blackPawns];
        newPawns[selected.index] = update;
        setBlackPawns(newPawns);

        // If capturing, remove white pawn
        if (isDiagonalCapture) {
          setWhitePawns(prev =>
            prev.filter(p => !(p.row === row && p.col === col))
          );
        }
      }

      // Switch turns after valid move
      setTurn(turn === "white" ? "black" : "white");
    } else {
      // Invalid move: notify user
      alert("Illegal pawn move!");
    }

    // Clear selection regardless of outcome
    setSelected(null);
  };

  // Render each board tile
  const renderTile = (row, col) => {
    const white = whitePawns.find(p => p.row === row && p.col === col);
    const black = blackPawns.find(p => p.row === row && p.col === col);
    const isSelected =
      selected?.row === row && selected?.col === col;

    return (
      <div
        className={`pawn ${isSelected ? "selected" : ""}`}
        onClick={() => handleClick(row, col)}
      >
        {white && <img src={pawn} alt="white" />}
        {black && <img src={pawn2} alt="black" />}
      </div>
    );
  };

  // Render the board with custom tiles
  return <BoardComponent renderTile={renderTile} />;
};

export default PawnComponent;
