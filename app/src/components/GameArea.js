import React from "react";
import ScoreArea from "./ScoreArea";
import CardsArea from "./CardsArea";
import WinnerScreen from "./WinnerScreen";
import "../styles/GameArea.css";



const GameArea = (props) => {
    const maxScore = props.cards.length;
    const score = props.cards.filter(item => item.wasClicked).length;

    let gameArea = (
        <div className="GameArea">
            <ScoreArea score={score} maxScore={maxScore}/>
            <CardsArea cards={props.cards} setCards={props.setCards}/>
        </div>
    );

    if (score >= maxScore) {
        gameArea = (
            <div className="GameArea">
                <WinnerScreen cards={props.cards} setCards={props.setCards}/>
            </div>
        );
    }

    return gameArea;
};


export default GameArea;