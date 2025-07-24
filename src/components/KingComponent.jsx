import React, { useState } from "react";
import king from "../assets/images/King.png";     // White king image
import king2 from "../assets/images/King2.png";   // Black king image
import BoardComponent from "./BoardComponents";
import "./BoardComponents.css";

const KingComponent = () => {
  const [whiteKingPosition, setWhiteKingPosition] = useState({ row: 7, col: 4 }); // e1
  const [blackKingPosition, setBlackKingPosition] = useState({ row: 0, col: 4 }); // e8
  const [selectedKing, setSelectedKing] = useState(null);
  const [currentTurn, setCurrentTurn] = useState("white");

  const handleClick = (row, col) => {
    const isWhiteKing =
      whiteKingPosition &&
      whiteKingPosition.row === row &&
      whiteKingPosition.col === col;
    const isBlackKing =
      blackKingPosition &&
      blackKingPosition.row === row &&
      blackKingPosition.col === col;

    if (!selectedKing) {
      if (isWhiteKing && currentTurn === "white") {
        setSelectedKing("white");
      } else if (isBlackKing && currentTurn === "black") {
        setSelectedKing("black");
      } else {
        alert(`It's ${currentTurn}'s turn!`);
      }
      return;
    }

    const currentPos =
      selectedKing === "white" ? whiteKingPosition : blackKingPosition;
    const otherKingPos =
      selectedKing === "white" ? blackKingPosition : whiteKingPosition;

    const rowDiff = Math.abs(row - currentPos.row);
    const colDiff = Math.abs(col - currentPos.col);

    const isLegalMove =
      rowDiff <= 1 && colDiff <= 1 && (rowDiff !== 0 || colDiff !== 0);

    const isOccupiedByOpponent =
      otherKingPos && otherKingPos.row === row && otherKingPos.col === col;

    if (!isLegalMove) {
      alert("Illegal move! The King moves only 1 square in any direction.");
    } else {
      if (selectedKing === "white") {
        setWhiteKingPosition({ row, col });
        if (isOccupiedByOpponent) setBlackKingPosition(null);
      } else {
        setBlackKingPosition({ row, col });
        if (isOccupiedByOpponent) setWhiteKingPosition(null);
      }

      setCurrentTurn((prev) => (prev === "white" ? "black" : "white"));
    }

    setSelectedKing(null);
  };

  const renderTile = (row, col) => {
    const isWhite =
      whiteKingPosition &&
      whiteKingPosition.row === row &&
      whiteKingPosition.col === col;
    const isBlack =
      blackKingPosition &&
      blackKingPosition.row === row &&
      blackKingPosition.col === col;
    const isSelected =
      (selectedKing === "white" && isWhite) ||
      (selectedKing === "black" && isBlack);

    return (
      <div className="tile-content">
        {isWhite && (
          <img
            src={king}
            alt="White King"
            className={`chess-icon ${isSelected ? "selected" : ""}`}
          />
        )}
        {isBlack && (
          <img
            src={king2}
            alt="Black King"
            className={`chess-icon ${isSelected ? "selected" : ""}`}
          />
        )}
        <div
          className={isSelected ? "tile-overlay selected" : "tile-overlay"}
          onClick={() => handleClick(row, col)}
        />
      </div>
    );
  };

  return <BoardComponent renderTile={renderTile} />;
};

export default KingComponent;