
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HomePage = () => {
//     const navigate = useNavigate(); // hook to navigate to the game board

//     const handleStartGame = () => {
//         navigate("/game"); // route to game page
//     };

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.heading}>♛ Welcome to Queen Chess ♕</h1>
//             <p style={styles.intro}>
//                 In this mini chess game, each player controls one queen. Take turns moving
//                 your queen like in real chess: vertically, horizontally, or diagonally. Capture
//                 the other queen to win!
//             </p>
//             <ul style={styles.rules}>
//                 <li>White goes first</li>
//                 <li>Click your queen to select it</li>
//                 <li> Then click a square to move</li>
//                 <li> You can't move if it's not your turn</li>
//                 <li> First to capture the opponent wins!</li>
//             </ul>
//             <button style={styles.button} onClick={handleStartGame}>
//                 Start Game
//             </button>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         padding: "2rem",
//         textAlign: "center",
//         backgroundColor: "#f5f5f5",
//         height: "100vh",
//     },
//     heading: {
//         fontSize: "2.5rem",
//         marginBottom: "1rem",
//     },
//     intro: {
//         fontSize: "1.2rem",
//         marginBottom: "1rem",
//     },
//     rules: {
//         textAlign: "left",
//         maxWidth: "600px",
//         margin: "0 auto 2rem",
//         fontSize: "1rem",
//     },
//     button: {
//         padding: "0.8rem 2rem",
//         fontSize: "1.1rem",
//         backgroundColor: "#4CAF50",
//         color: "white",
//         border: "none",
//         borderRadius: "10px",
//         cursor: "pointer",
//     },
// };

// export default HomePage;