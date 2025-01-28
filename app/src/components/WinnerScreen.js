import React from "react";
import loadCards from "../util/loadCards";
import "../styles/WinnerScreen.css";


const WinnerScreen = (props) => {

    const handleClick = () => {
        props.setCards(loadCards());
    };

    return (
        <div className="WinnerScreen">
            <span>You Win!</span>
            <button onClick={event => handleClick()}>Play again?</button>
        </div>
    );
};


export default WinnerScreen;