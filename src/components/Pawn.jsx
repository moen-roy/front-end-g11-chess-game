import React, { useState } from "react";
import BoardComponent from "../components/BoardComponents";
import pawn from "../assets/images/Pawn.png";   // White pawn
import pawn2 from "../assets/images/Pawn2.png"; // Black pawn
import "./BoardComponents.css";

const PawnComponent = () => {
  // Create 8 white pawns on row 6 (second last row)
  const [whitePawns, setWhitePawns] = useState(
    Array.from({ length: 8 }, (_, col) => ({ row: 6, col }))
  );
  // Create 8 black pawns on row 1 (second row)
  const [blackPawns, setBlackPawns] = useState(
    Array.from({ length: 8 }, (_, col) => ({ row: 1, col }))
  );
    
const [selected, setSelected] = useState(null); // Holds selected pawn
const [turn, setTurn] = useState("white"); // Track player turn

  // Placeholder for click handling logic (to be added later)
const handleClick = (row, col) => {
  // If no pawn is selected yet
  if (!selected) {
    const pawns = turn === "white" ? whitePawns : blackPawns;
    const index = pawns.findIndex(p => p.row === row && p.col === col);

    // If clicked on a pawn belonging to current player, select it
    if (index !== -1) {
      setSelected({ row, col, index });
    }
    // Inside handleClick after "if (!selected)" block

const direction = turn === "white" ? -1 : 1;
const startRow = turn === "white" ? 6 : 1;

const rowDiff = row - selected.row;
const colDiff = col - selected.col;

const isForward = colDiff === 0;
const isOneStep = rowDiff === direction;
const isTwoStep = selected.row === startRow && rowDiff === 2 * direction;

// Forward movement only
if (isForward && (isOneStep || isTwoStep)) {
  const update = { row, col };

  if (turn === "white") {
    const newPawns = [...whitePawns];
    newPawns[selected.index] = update;
    setWhitePawns(newPawns);
  } else {
    const newPawns = [...blackPawns];
    newPawns[selected.index] = update;
    setBlackPawns(newPawns);
  }

  setTurn(turn === "white" ? "black" : "white");
} else {
  alert("Illegal pawn move!");
}

setSelected(null);

    return;
  }

  // Move logic to be added later...
  setSelected(null); // Deselect
};

  // Render each tile with a pawn image if present
  const renderTile = (row, col) => {
    const white = whitePawns.find(p => p.row === row && p.col === col);
    const black = blackPawns.find(p => p.row === row && p.col === col);

    return (
      <div className="pawn" onClick={() => handleClick(row, col)}>
        {white && <img src={pawn} alt="white" />}
        {black && <img src={pawn2} alt="black" />}
      </div>
    );
  };

  return <BoardComponent renderTile={renderTile} />;
};

export default PawnComponent;