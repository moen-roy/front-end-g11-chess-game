import React from "react";
import  { useState } from "react";

import bishopWhite from "../assets/images/Bishop1.png";
import bishopBlack from "../assets/images/Bishop2.png";
import "./BoardComponents.css";
// import BoardComponent from "../components/BoardComponents"; // getting the board component 

// placing positions for 4 bishops in the board 
const initialBishops = [
  { id: 1, row: 7, col: 2, color: "white", image: bishopWhite }, // c1
  { id: 2, row: 7, col: 5, color: "white", image: bishopWhite }, // f1 // these are array 
  { id: 3, row: 0, col: 2, color: "black", image: bishopBlack }, // c8
  { id: 4, row: 0, col: 5, color: "black", image: bishopBlack }, // f8
];

const BishopComponent = () => { // rendering the bishop logic 
  const [bishops, setBishops] = useState(initialBishops);
  const [selected, setSelected] = useState(null);

  const handleClick = (row, col) => {
    // If no piece is selected, select the bishop at the clicked tile
    if (!selected) {
      const found = bishops.find((b) => b.row === row && b.col === col);
      if (found) {
        setSelected(found.id);
      }
      return;
    }

    // Move the selected bishop if the move is diagonal
    const current = bishops.find((b) => b.id === selected);
    const rowDiff = Math.abs(row - current.row);
    const colDiff = Math.abs(col - current.col);

    if (rowDiff === colDiff) { // bishop moves diagonally 
      const updated = bishops.map((b) => // created a new array of bishops and update postion 
        b.id === selected ? { ...b, row, col } : b // update the position of bishop
      );
      setBishops(updated);
    } else {
      alert("Illegal bishop move! Bishops move diagonally.");
    }

    setSelected(null); // deselect after moving
  };

  // Reset handler to where bishop was 
  const handleReset = () => {
    setBishops(initialBishops);
    setSelected(null);
  };

  const renderTile = (row, col) => {
    const bishop = bishops.find((b) => b.row === row && b.col === col); // check if bishop is on the right place 
    const isSelected = bishop?.id === selected; //check if bishop was selected 

    return (
      <div
        className={`tile ${isSelected ? "selected" : ""}`}
        onClick={() => handleClick(row, col)}
      >
        {bishop && (
          <img src={bishop.image} alt="Bishop" className="piece-image" /> 
        )}
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <BoardComponent renderTile={renderTile} />

      <button
        onClick={handleReset}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontWeight: "bold",
          backgroundColor: "#1d1f22ff", // reset button styling 
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Reset Bishop
      </button>
    </div>
  );
};

export default BishopComponent;

// Has a bishop moves diagonally 
// has a reset button to take back bishop to inital possition
// has a board component to render the board with tiles
// has all the four bishops in place 