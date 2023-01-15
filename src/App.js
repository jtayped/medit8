import "./App.css";
import { Timer } from "./containers/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer
          inhaleTime={750}
          exhaleTime={500}
          loopsTillBreathHold={25}
          breathHoldTime={90000}
        />
      </header>
    </div>
  );
}

export default App;
