import "./App.css";
import { Timer } from "./containers/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer
          inhaleTime={1000}
          exhaleTime={750}
          loopsTillBreathHold={3}
          breathHoldTime={10000}
        />
      </header>
    </div>
  );
}

export default App;
