import React from "react";
import "../styles/ScoreArea.css";


const ScoreArea = (props) => {

    return (
        <div className="ScoreArea">
            <span>{props.score} / {props.maxScore}</span>
        </div>
    );
};


export default ScoreArea;