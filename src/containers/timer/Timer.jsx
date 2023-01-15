import "./timer.css";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const inhaleTime = props.inhaleTime;
  const exhaleTime = props.exhaleTime;
  const loopsTillBreathHold = props.loopsTillBreathHold;
  const breathHoldTime = props.breathHoldTime;

  const [start, setStart] = useState(false);
  const [time, setTime] = useState(inhaleTime);
  const [percentage, setPercentage] = useState(100);
  const [loops, setLoops] = useState(0);

  const [phase, setPhase] = useState("inhale");

  function reset() {
    setStart(false);
    setTime(inhaleTime);
    setPercentage(0);
    setLoops(0);
    setPhase("inhale");
  }

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime((time) => time - 1);
          if (phase === "inhale") {
            setPercentage(100 - (time / inhaleTime) * 100);
          } else if (phase === "exhale") {
            setPercentage((time / exhaleTime) * 100);
          } else if (phase === "hold") {
            setPercentage((time / breathHoldTime) * 100);
          }
        } else {
          if (loopsTillBreathHold > loops) {
            if (phase === "inhale") {
              setTime(exhaleTime);
              setPhase("exhale");
              setLoops((loops) => loops + 1);
            } else if (phase === "exhale" || phase === "hold") {
              setTime(inhaleTime);
              setPhase("inhale");
            }
          } else {
            setTime(breathHoldTime);
            setPhase("hold");
            setLoops(0);
          }
        }
      }, 1);
    }
    return () => clearInterval(interval);
  }, [
    start,
    phase,
    time,
    loops,
    breathHoldTime,
    exhaleTime,
    inhaleTime,
    loopsTillBreathHold,
  ]);

  return (
    <div className="main">
      {!start ? (
        <header className="start-menu">
          <h1>Medit8</h1>
          <p>
            Unlock your full potential with our meditation app. Find peace,
            clarity and inner strength to improve every aspect of your life.
            Experience the benefits of mindfulness and develop a powerful
            mindset to achieve your goals.
          </p>
          <button onClick={() => setStart(true)} className="start">
            Start
          </button>
        </header>
      ) : (
        <div className="meditation-main">
          <div className="details">
            <h2>
              {phase === "inhale"
                ? "Inhale"
                : phase === "hold"
                ? "Hold"
                : "Exhale"}
            </h2>
          </div>

          <div
            className="breath-circle"
            style={{
              transform: `scale(${percentage / 100})`,
              opacity: `${percentage + 25}%`,
            }}
          />
          <div
            className="breath-circle-ring"
            style={{
              opacity: `${percentage - 50}%`,
            }}
          />
          <button onClick={() => reset()} className="reset">
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default Timer;
