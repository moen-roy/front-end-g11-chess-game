import React from "react";

function handleReset = () => {
    setBoard(initalBoard); // reset origin board 
    setTurn('white');
    setSelectedPiece(null); // clear selected piece 
}