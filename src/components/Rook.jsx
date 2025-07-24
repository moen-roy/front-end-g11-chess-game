// src/components/RookComponent.js
import React, { useState } from "react";
import BoardComponent from "./BoardComponents";
import rookWhite from "../assets/images/Rook.png";
import rookBlack from "../assets/images/Rook2.png";
import "./BoardComponents.css";

function RookComponent() {
  const [whiteRooks] = useState([
    { row: 7, col: 0 },
    { row: 7, col: 7 },
  ]);
  const [blackRooks] = useState([
    { row: 0, col: 0 },
    { row: 0, col: 7 },
  ]);

  const renderTile = (row, col) => {
    const white = whiteRooks.find(p => p.row === row && p.col === col);
    const black = blackRooks.find(p => p.row === row && p.col === col);

    return (
      <div className="rook">
        {white && <img src={rookWhite} alt="White Rook" />}
        {black && <img src={rookBlack} alt="Black Rook" />}
      </div>
    );
  };

  return <BoardComponent renderTile={renderTile} />;
}

export default RookComponent;
