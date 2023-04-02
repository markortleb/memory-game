import React from "react";
import "../styles/CardsArea.css"
import loadCards from "../util/loadCards";
import shuffleArray from "../util/shuffleArray";


const CardsArea = (props) => {

    const handleClick = (index) => {
        let curCards = props.cards;

        if (!props.cards[index].wasClicked) {
            curCards[index].wasClicked = true;
            shuffleArray(curCards);
            props.setCards([...curCards]);
        } else {
            props.setCards(loadCards());
        }

    };

    return (
        <ul className="CardsArea">
            {props.cards.map((card, index) => {
                return (
                    <li key={card.id} onClick={event => handleClick(index)}>
                        <img src={card.image}/>
                    </li>
                )
            })}
        </ul>
    );
};


export default CardsArea;