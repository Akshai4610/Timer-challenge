import { useState, useRef } from "react";
import ResultLog from "./ResultLog";

export default function TimerChallenge({ title, targetedTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeStarted, setTime] = useState(false);
  const [timeExpired, setTimeExpire] = useState(false);

  function startTime() {
    timer.current = setTimeout(() => {
      setTimeExpire(true);
      dialog.current.showModal();
    }, targetedTime * 1000);
    setTime(true);
  }

  function stopTime() {
    clearTimeout(timer.current);
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
          <button onClick={timeStarted ? stopTime : startTime}>
            {timeStarted? "stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Timer running......" : "Timer  Inactive"}
        </p>
      </section>
    </>
  );
}