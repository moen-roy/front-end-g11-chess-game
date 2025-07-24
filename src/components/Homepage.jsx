import React from "react";

function Homepage() {
    return (
        <div className="home">
            <div>
                <h1>WELCOME TO CHESS-QUEST G11</h1>
            </div>
            <div >
                <h2>Introduction</h2>

                <p><span>Chess-quest</span> is a simple chess game app that that allows two players to manually play <span>chess</span></p>
                <img src="https://i.pinimg.com/736x/95/ab/89/95ab8956233bf677134f27d24b80eddd.jpg " alt="chessboard" />
            </div>
            <div className="container-1">
                <h3>SETTING UP THE BOARD</h3>
                <p>The board is already set up for you.<span>White always moves first</span></p>
                <h3>RANKS AND FILES</h3>
                <p>Going from left to right the vertical rows on the board, called files.
                    The horizontal rows, called ranks, are numbered 1 to 8. The 1st rank is white's side of the board; 8 is black's side.
                    This system is used to describe where each piece is on the board (e.g. the white king is on e1; the black king is on e8).
                    When the board is set up the square a1 will be on the bottom left.</p>
                <h3>HOW THEY MOVE</h3>
                <p>Pieces are <span>one-touch move:</span>
                    Once you move a piece and take your hand off it, you cannot change your mind <b>unless your opponent lets you</b>, which they do not need to do.
                    However, you may touch a piece to adjust it without moving it—just say "adjust" first. If you touch a piece, you must move it.
                    If you touch one of the pieces during the game, then place it back in its original position, as long as you don’t take your hand off it.
                </p>
                <h4 >Pawn </h4>
                <img src="src/assets/images/Pawn.png" className="icons" alt="pawn"></img>
                <p>

                    White pawns start on <span>rank 2</span>, black pawns on <span>rank 7</span>. The first time a pawn moves, it may move forward either 1 or 2 squares.
                    After that, it can only move 1 square forward. <b>Pawns capture diagonally,</b> forward left or forward right one square.
                    A pawn cannot move backward.
                    If a pawn reaches the last rank (8 for white, 1 for black).
                </p>
                <h4>Bishop </h4>
                <img src="src/assets/images/Bishop1.png" className="icons" alt="bishop"></img>

                <p>The bishop moves <b>diagonally </b>across any distance of unoccupied squares.
                    Each player starts with one bishop on a light square and one on a dark square.
                    Bishops remain on the same color for the entire game.</p>
                <h4>Rook </h4>
                <img src="src/assets/images/Rook.png" className="icons" alt="rook"></img>

                <p>
                    The rook moves in a <b>straight line </b>in any direction: up, down, left, or right. The rook also plays a key role in castling, which is a special move involving the king.
                </p>
                <h4>Queen </h4>
                <img src="src/assets/images/Queen.png" className="icons" alt="queen"></img>

                <p>The queen is the most powerful piece. It <span>can move any number of squares</span> in any direction: straight or diagonal.
                    The queen combines <b>the power of the rook and bishop.</b></p>
                <h4>King</h4>
                <img src="src/assets/images/king.png" className="icons" alt="king"></img>

                <p>
                    The most important piece on the board is<span>the king.</span> The king can move <span>one square</span> in any direction: forward, backward, sideways, or diagonally.
                    The capture of the king is the object of the game.</p>

            </div>
        </div>
    )
}
export default Homepage;