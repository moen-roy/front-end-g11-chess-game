import React from "react";
import BoardComponent from "./BoardComponents";
import PawnComponent from "./Pawn";
import RookComponent from "./Rook";
import BishopComponent from "./Bishop";
import QueenComponent from "./QueenComponent";

function All() {
  // Define where each piece goes on the board
  const pieces = [
    { row: 6, col: 0, component: <PawnComponent /> },
    { row: 7, col: 0, component: <RookComponent /> },
    { row: 7, col: 2, component: <BishopComponent /> },
    { row: 7, col: 3, component: <QueenComponent /> },
    // Add more if needed
  ];

  const renderTile = (row, col) => {
    const foundPiece = pieces.find(
      (piece) => piece.row === row && piece.col === col
    );
    return foundPiece ? foundPiece.component : null;
  };

  return (
    <div>
      <BoardComponent renderTile={renderTile} />
    </div>
  );
}

export default All;
