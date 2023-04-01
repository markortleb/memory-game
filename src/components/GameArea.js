import React from "react";
import ScoreArea from "./ScoreArea";
import CardsArea from "./CardsArea";
import "../styles/GameArea.css";



const GameArea = (props) => {
    return (
        <div className="GameArea">
            <ScoreArea cards={props.cards}/>
            <CardsArea cards={props.cards}/>
        </div>
    );
};


export default GameArea;