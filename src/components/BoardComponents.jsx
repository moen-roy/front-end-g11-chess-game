// src/components/BoardComponent.js
import React from "react";
import "./BoardComponents.css";

function BoardComponent({ renderTile }) {
  const rows = 8;
  const columns = 8;

  const createBoard = () => {
    let board = [];

    for (let row = 0; row < rows; row++) {
      let cells = [];
      for (let col = 0; col < columns; col++) {
        const isEven = (row + col) % 2 === 0;
        cells.push(
          <div
            key={`${row}-${col}`}
            className={`tile ${isEven ? "blue" : "gold"}`}
          >
            {renderTile ? renderTile(row, col) : null}
          </div>
        );
      }
      board.push(
        <div key={row} className="row">
          {cells}
        </div>
      );
    }

    return board;
  };

  return <div className="board">{createBoard()}</div>;
}

export default BoardComponent;
