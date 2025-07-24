import React from "react"
import { useState } from "react"
import queen from "../assets/images/Queen.png"; // White queen image
import queen2 from "../assets/images/Queen2.png"; // Black queen image
// import BoardComponent from "./BoardComponents"; // Your board rendering component
import "./BoardComponents.css"; // Styles for tiles, pieces, and highlights

const QueenComponent = () => {
    // Track positions of both queens
    const [whiteQueenPosition, setWhiteQueenPosition] = useState({ row: 7, col: 3 }); // d1
    const [blackQueenPosition, setBlackQueenPosition] = useState({ row: 0, col: 3 }); // d8

    // Track which queen is currently selected for movement
    const [selectedQueen, setSelectedQueen] = useState(null);

    // Track which player's turn it is
    const [currentTurn, setCurrentTurn] = useState("white");

    // Handle clicks on any tile
    const handleClick = (row, col) => {
        const isWhiteQueen = whiteQueenPosition && whiteQueenPosition.row === row && whiteQueenPosition.col === col;
        const isBlackQueen = blackQueenPosition && blackQueenPosition.row === row && blackQueenPosition.col === col;

        // No queen selected yet — check if clicked on the right queen for the current turn
        if (!selectedQueen) {
            if (isWhiteQueen && currentTurn === "white") {
                setSelectedQueen("white");
            } else if (isBlackQueen && currentTurn === "black") {
                setSelectedQueen("black");
            } else {
                alert(`It's ${currentTurn}'s turn!`);
            }
            return;
        }

        // A queen is selected — now handle the move
        const currentPos = selectedQueen === "white" ? whiteQueenPosition : blackQueenPosition;
        const otherQueenPos = selectedQueen === "white" ? blackQueenPosition : whiteQueenPosition;

        // Calculate move differences
        const rowDiff = Math.abs(row - currentPos.row);
        const colDiff = Math.abs(col - currentPos.col);

        // Check if the move is in a straight line or diagonal (Queen's legal moves)
        const isDiagonal = rowDiff === colDiff;
        const isStraight = row === currentPos.row || col === currentPos.col;
        const isLegalMove = isDiagonal || isStraight;

        // Check if landing on the opponent queen
        const isOccupiedByOpponent =
            otherQueenPos && otherQueenPos.row === row && otherQueenPos.col === col;

        // If the move isn't legal, notify the user
        if (!isLegalMove) {
            alert("Illegal move! The Queen moves straight or diagonally.");
        } else {
            // Move the selected queen and capture opponent if present
            if (selectedQueen === "white") {
                setWhiteQueenPosition({ row, col });
                if (isOccupiedByOpponent) setBlackQueenPosition(null); // Capture black
            } else {
                setBlackQueenPosition({ row, col });
                if (isOccupiedByOpponent) setWhiteQueenPosition(null); // Capture white
            }

            // Switch the turn to the other player
            setCurrentTurn((prev) => (prev === "white" ? "black" : "white"));
        }

        // Deselect queen after move
        setSelectedQueen(null);
    };

    // Render each tile: show queen images and selection highlight
    const renderTile = (row, col) => {
        const isWhite = whiteQueenPosition && whiteQueenPosition.row === row && whiteQueenPosition.col === col;
        const isBlack = blackQueenPosition && blackQueenPosition.row === row && blackQueenPosition.col === col;
        const isSelected =
            (selectedQueen === "white" && isWhite) || (selectedQueen === "black" && isBlack);

        return (
            <div
                className={isSelected ? "selected" : ""}
                onClick={() => handleClick(row, col)}
            >
                {isWhite && <img src={queen} alt="White Queen" className="chess-icon" />}
                {isBlack && <img src={queen2} alt="Black Queen" className="chess-icon" />}
            </div>
        );
    };

    // Render the board by passing renderTile to BoardComponent
    return <BoardComponent renderTile={renderTile} />;
};

export default QueenComponent;