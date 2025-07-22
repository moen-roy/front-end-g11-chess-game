
import React, { useState } from "react";
import "./chessboard.css";
import queen from "../../assets/images/Queen.png"
import queen2 from "../../assets/images/Queen2.png"

const Chessboard = () => {
    const [blackQueenPosition, setBlackQueenPosition] = useState({ row: 0, col: 3 });
    const [whiteQueenPosition, setWhiteQueenPosition] = useState({ row: 7, col: 3 });
    const [selectedQueen, setSelectedQueen] = useState(null); // defines the different side queens
    const [currentTurn, setCurrentTurn] = useState("white"); //to alternate turns


    const rows = 8;
    const cols = 8;
    const board = [];

    const handleSquareClick = (row, col) => {
        if (selectedQueen) {
            
            const otherQueenPosition =
                selectedQueen === "white" ? blackQueenPosition : whiteQueenPosition;
            const isOccupiedByOtherQueen =
                row === otherQueenPosition.row && col === otherQueenPosition.col;

            const currentPosition =
                selectedQueen === "white" ? whiteQueenPosition : blackQueenPosition;

            const rowDiff = Math.abs(row - currentPosition.row);
            const colDiff = Math.abs(col - currentPosition.col);

            const isLegalMove =
                row === currentPosition.row ||
                col === currentPosition.col ||
                rowDiff === colDiff;

            if (isOccupiedByOtherQueen) {
                
                if (selectedQueen === "white") {
                    setWhiteQueenPosition({ row, col });    // to move the white queen
                    setBlackQueenPosition(null);            // to remove black queen
                } else {
                    setBlackQueenPosition({ row, col });    // to move black queen
                    setWhiteQueenPosition(null);            // to remove white queen
                }

                setCurrentTurn(currentTurn === "white" ? "black" : "white");
            }
            else if (isLegalMove) {
                if (selectedQueen === "white") {
                    setWhiteQueenPosition({ row, col });
                } else {
                    setBlackQueenPosition({ row, col });
                }
                // Switch turns
                setCurrentTurn(currentTurn === "white" ? "black" : "white");
            } else {
                alert("Illegal move!");
            }
                setSelectedQueen(null); // unselect queen after moving attempt
        } else {
            // Selecting a queen
            if (whiteQueenPosition && row === whiteQueenPosition.row && col === whiteQueenPosition.col) {
                if (currentTurn === "white") {
                    setSelectedQueen("white");
                } else {
                    alert("It's black's turn!");
                }
            } else if (blackQueenPosition && row === blackQueenPosition.row && col === blackQueenPosition.col) {
                if (currentTurn === "black") {
                    setSelectedQueen("black");
                } else {
                    alert("It's white's turn!");
                }
            }
        }
    };

    

};

export default Chessboard;
