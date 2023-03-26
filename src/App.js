import './styles/App.css';
import TitleBar from "./components/TitleBar";
import GameArea from "./components/GameArea";

const App = () => {
  return (
      <div>
        <TitleBar />
        <GameArea />
      </div>
  );
};

export default App;
