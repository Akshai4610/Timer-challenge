import { useState, useRef } from "react";
import ResultLog from "./ResultLog";

export default function TimerChallenge({ title, targetedTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetedTime * 1000);

    const timeActive=timeRemaining>0 && timeRemaining<targetedTime * 1000

    if (timeRemaining<=0) {
        clearInterval(timer.current)
        setTimeRemaining(targetedTime * 1000)
        dialog.current.open()
    }

  function startTime() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);     //default execution time
    setTime(true);
  }

  function stopTime() {
    clearInterval(timer.current);
    dialog.current.open()
  }

  return (
    <>
      <ResultLog ref={dialog} targetTime={targetedTime} result="Lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetedTime} second {targetedTime > 1 ? "s" : " "}
        </p>
        <p>
          <button onClick={timeActive ? stopTime : startTime}>
            {timeActive ? "stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeActive ? "active" : undefined}>
          {timeActive ? "Timer running......" : "Timer  Inactive"}
        </p>
      </section>
    </>
  );
}
