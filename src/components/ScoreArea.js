import React from "react";
import "../styles/ScoreArea.css";


const ScoreArea = (props) => {

    const maxScore = props.cards.length;
    const score = props.cards.filter(item => item.wasClicked).length;

    return (
        <div className="ScoreArea">
            <span>{score} / {maxScore}</span>
        </div>
    );
};


export default ScoreArea;