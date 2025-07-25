import React, { useState } from "react";

const Homepage = ({ onNext }) => {

    return (
        <div classname="home">
            <div>
                <h1>WELCOME TO CHESS-QUEST G11</h1>
                <p>
                    <span>Chess-quest</span> is a simple chess game app that allows two players to play manually.
                </p>
                <img
                    src="https://i.pinimg.com/736x/95/ab/89/95ab8956233bf677134f27d24b80eddd.jpg"
                    alt="chessboard"
                    style={{ width: "60%", borderRadius: "10px" }}
                />
            </div>

            <div>
                <button onClick={onNext}>Next</button>
            </div>

        </div>
    );
};

export default Homepage;