// src/components/ChessGame.js
import React, { useState } from "react";
import BoardComponent from "./BoardComponents";

import pawnWhite from "../assets/images/Pawn.png";
import pawnBlack from "../assets/images/Pawn2.png";
import rookWhite from "../assets/images/Rook.png";
import rookBlack from "../assets/images/Rook2.png";
import bishopWhite from "../assets/images/Bishop1.png";
import bishopBlack from "../assets/images/Bishop2.png";
import kingWhite from "../assets/images/King.png";
import kingBlack from "../assets/images/King2.png";
import queenWhite from "../assets/images/Queen.png";
import queenBlack from "../assets/images/Queen2.png";

// Step 1: Extract this into a function so we can call it for resetting
const getInitialBoard = () => {
  const initial = {}; // initial board 

  for (let col = 0; col < 8; col++) {
    initial[`6-${col}`] = { type: "pawn", color: "white" };
    initial[`1-${col}`] = { type: "pawn", color: "black" };
  }

  initial["7-0"] = { type: "rook", color: "white" };
  initial["7-7"] = { type: "rook", color: "white" };
  initial["0-0"] = { type: "rook", color: "black" };
  initial["0-7"] = { type: "rook", color: "black" };

  initial["7-2"] = { type: "bishop", color: "white" };
  initial["7-5"] = { type: "bishop", color: "white" };
  initial["0-2"] = { type: "bishop", color: "black" };
  initial["0-5"] = { type: "bishop", color: "black" };

  initial["7-4"] = { type: "king", color: "white" };
  initial["0-4"] = { type: "king", color: "black" };

  initial["7-3"] = { type: "queen", color: "white" };
  initial["0-3"] = { type: "queen", color: "black" };

  return initial;
};

function ChessGame() {
  const [boardState, setBoardState] = useState(getInitialBoard); // keep track of where pieces are 
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [currentTurn, setCurrentTurn] = useState("white"); // stores whoese turn it is 

  const handleTileClick = (row, col) => {
    const key = `${row}-${col}`;
    const piece = boardState[key];

    if (selectedPiece) { // if a piece is selected 
      const { row: fromRow, col: fromCol, piece: movingPiece } = selectedPiece; // get the piece current location and value 
      const fromKey = `${fromRow}-${fromCol}`;

      if (isValidMove(movingPiece, fromRow, fromCol, row, col)) {
        const newBoard = { ...boardState }; // these copies the board 
        delete newBoard[fromKey]; // deleting the piece from old position 
        newBoard[key] = movingPiece; // add the piece in a new position 
        setBoardState(newBoard); // update the board
        setSelectedPiece(null);
        setCurrentTurn((prev) => (prev === "white" ? "black" : "white")); // switch the turn 
      } else {
        setSelectedPiece(null);
      }
    } else if (piece && piece.color === currentTurn) {
      setSelectedPiece({ row, col, piece });
    }
  };

  const isValidMove = (piece, fromRow, fromCol, toRow, toCol) => { // if clicked check if from one square 
    if (fromRow === toRow && fromCol === toCol) return false; // cant move the same square 

    const destKey = `${toRow}-${toCol}`;
    const targetPiece = boardState[destKey];
    if (targetPiece && targetPiece.color === piece.color) return false; // cant capture 

    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);
    const rowStep = toRow > fromRow ? 1 : toRow < fromRow ? -1 : 0;
    const colStep = toCol > fromCol ? 1 : toCol < fromCol ? -1 : 0;

    const isPathClear = () => {
      let r = fromRow + rowStep;
      let c = fromCol + colStep;
      while (r !== toRow || c !== toCol) {
        if (boardState[`${r}-${c}`]) return false;
        r += rowStep;
        c += colStep;
      }
      return true;
    };

    switch (piece.type) {
      case "pawn": {
        const dir = piece.color === "white" ? -1 : 1;
        const startRow = piece.color === "white" ? 6 : 1;
        const oneStep = toRow === fromRow + dir && fromCol === toCol && !targetPiece;
        const twoStep =
          fromRow === startRow &&
          toRow === fromRow + 2 * dir &&
          fromCol === toCol &&
          !boardState[`${fromRow + dir}-${fromCol}`] &&
          !targetPiece;
        const captureMove =
          toRow === fromRow + dir &&
          Math.abs(toCol - fromCol) === 1 &&
          targetPiece &&
          targetPiece.color !== piece.color;

        return oneStep || twoStep || captureMove;
      }

      case "rook":
        return (fromRow === toRow || fromCol === toCol) && isPathClear();

      case "bishop":
        return rowDiff === colDiff && isPathClear();

      case "queen":
        const diagonal = rowDiff === colDiff;
        const straight = fromRow === toRow || fromCol === toCol;
        return (diagonal || straight) && isPathClear();

      case "king":
        return rowDiff <= 1 && colDiff <= 1;

      default:
        return false;
    }
  };

  const renderTile = (row, col) => {
    const key = `${row}-${col}`;
    const piece = boardState[key];
    const isSelected = selectedPiece?.row === row && selectedPiece?.col === col;

    let imageSrc = "";
    if (piece?.type === "pawn") imageSrc = piece.color === "white" ? pawnWhite : pawnBlack;
    if (piece?.type === "rook") imageSrc = piece.color === "white" ? rookWhite : rookBlack;
    if (piece?.type === "bishop") imageSrc = piece.color === "white" ? bishopWhite : bishopBlack;
    if (piece?.type === "king") imageSrc = piece.color === "white" ? kingWhite : kingBlack;
    if (piece?.type === "queen") imageSrc = piece.color === "white" ? queenWhite : queenBlack;

    return (
      <div
        className={`tile-content ${isSelected ? "selected" : ""}`}
        onClick={() => handleTileClick(row, col)}
      >
        {piece && <img src={imageSrc} alt={piece.type} className="chess-icon" />}
      </div>
    );
  };

  // RESET FUNCTION
  const resetGame = () => {
    setBoardState(getInitialBoard());
    setSelectedPiece(null);
    setCurrentTurn("white");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>React Chess Game</h2>

      {/* Reset Button */}
      <div style={{ textAlign: "center", margin: "10px" }}>
        <button onClick={resetGame} style={{ padding: "8px 16px", fontSize: "16px" }}>
          Reset Game
        </button>
      </div>

      <BoardComponent renderTile={renderTile} />
    </div>
  );
}

export default ChessGame;
