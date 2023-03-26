import React from "react";


const TitleBar = () => {
    return (
        <div className="TitleBar">
            <h1>Memory Game</h1>
            <span>
                Get points for choosing a card.
                If you chose a card more than once, you lose.
            </span>
        </div>
    );
};

export default TitleBar;