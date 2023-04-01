import React from "react";
import ScoreArea from "./ScoreArea";
import CardsArea from "./CardsArea";



const GameArea = (props) => {
    return (
        <div className="GameArea">
            <ScoreArea score={props.score}/>
            <CardsArea cards={props.cards}/>
        </div>
    );
};


export default GameArea;