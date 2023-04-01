import React from "react";
import "../styles/CardsArea.css"


const CardsArea = (props) => {
    return (
        <ul className="CardsArea">
            {props.cards.map((card, index) => {
                return (
                    <li key={card.id}>
                        <img src={card.image}/>
                    </li>
                )
            })}
        </ul>
    );
};


export default CardsArea;