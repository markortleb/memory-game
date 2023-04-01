import './styles/App.css';
import TitleBar from "./components/TitleBar";
import GameArea from "./components/GameArea";
import {useState} from "react";
import loadCards from "./util/loadCards";

const App = () => {
    const [score, setScore] = useState(0);
    const [cards, setCards] = useState(loadCards());


    return (
        <div className="App">
            <TitleBar />
            <GameArea score={score} cards={cards}/>
        </div>
    );
};

export default App;
