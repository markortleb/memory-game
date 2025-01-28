import './styles/App.css';
import TitleBar from "./components/TitleBar";
import GameArea from "./components/GameArea";
import {useState} from "react";
import loadCards from "./util/loadCards";

const App = () => {
    const [cards, setCards] = useState(loadCards());


    return (
        <div className="App">
            <TitleBar />
            <GameArea cards={cards} setCards={setCards}/>
        </div>
    );
};

export default App;
