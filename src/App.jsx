// import React from "react";
// import QueenComponent from "./components/QueenComponent";
// import BoardComponent from "./components/BoardComponents";

// const App = () => {
//     const renderBoard = ({ whiteQueenPosition, blackQueenPosition, handleSquareClick }) => {
//         const renderCell = (row, col) => {
//             const isWhiteTile = (row + col) % 2 === 0;
//             const tileColor = isWhiteTile ? "white-tile" : "black-tile";

//             let piece = null;
//             if (whiteQueenPosition && whiteQueenPosition.row === row && whiteQueenPosition.col === col) {
//                 piece = <img src={queen} alt="White Queen" className="piece" />;
//             } else if (blackQueenPosition && blackQueenPosition.row === row && blackQueenPosition.col === col) {
//                 piece = <img src={queen2} alt="Black Queen" className="piece" />;
//             }

//             return (
//                 <div className={tileColor} onClick={() => handleSquareClick(row, col)}>
//                     {piece}
//                 </div>
//             );
//         };

//         return <BoardComponent />;
//     };

//     return (
//         <div>
//             <h1> Chess Game</h1>
//             <QueenComponent />
//         </div>
//     );
// };
  

// export default