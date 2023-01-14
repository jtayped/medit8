import "./timer.css";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const inhaleTime = props.inhaleTime;
  const exhaleTime = props.exhaleTime;
  const loopsTillBreathHold = props.loopsTillBreathHold;
  const breathHoldTime = props.breathHoldTime;

  const [start, setStart] = useState(true);
  const [time, setTime] = useState(inhaleTime);
  const [inhale, setInhale] = useState(true);
  const [percentage, setPercentage] = useState(100);
  const [loops, setLoops] = useState(0);

  function reset() {
    setStart(false);
    setTime(inhaleTime);
    setInhale(true);
    setPercentage(100);
    setLoops(0);
  }

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime((time) => time - 1);
          if (inhale) {
            setPercentage(100 - (time / inhaleTime) * 100);
          } else if (!inhale) {
            setPercentage((time / exhaleTime) * 100);
          } else {
            setPercentage((time / breathHoldTime) * 100);
          }
        } else {
          if (loops >= loopsTillBreathHold) {
            setTime(breathHoldTime);
            setLoops(0);
          } else {
            setInhale(!inhale);
            if (inhale) {
              setTime(exhaleTime);
              setLoops((loops) => loops + 1);
            } else {
              setTime(inhaleTime);
            }
          }
        }
      }, 1);
    }
    return () => clearInterval(interval);
  }, [
    start,
    time,
    inhale,
    loops,
    breathHoldTime,
    exhaleTime,
    inhaleTime,
    loopsTillBreathHold,
  ]);

  return (
    <div className="main">
      {!start ? (
        <button onClick={() => setStart(true)}>Start</button>
      ) : (
        <div className="meditation-main">
          <div className="details">
            <h1>{inhale ? "Inhale" : "Exhale"}</h1>
            <p>{loops}</p>
            <button onClick={() => reset()}>Reset</button>
          </div>

          <div
            className="breath-circle"
            style={{
              scale: `${percentage + 5}%`,
              opacity: `${percentage + 25}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Timer;
