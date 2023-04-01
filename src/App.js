import './styles/App.css';
import TitleBar from "./components/TitleBar";
import GameArea from "./components/GameArea";
import Footer from "./components/Footer";
import {useState} from "react";
import loadCards from "./util/loadCards";

const App = () => {
    const [cards, setCards] = useState(loadCards());


    return (
        <div className="App">
            <TitleBar />
            <GameArea cards={cards}/>
            <Footer />
        </div>
    );
};

export default App;
