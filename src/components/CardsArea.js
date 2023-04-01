import React from "react";


const CardsArea = (props) => {
    return (
        <ul className="CardsArea">
            {props.cards.map((card, index) => {
                return (
                    <li key={card.id}>

                    </li>
                )
            })}
        </ul>
    );
};


export default CardsArea;