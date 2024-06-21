import { forwardRef } from "react";

const ResultLog = forwardRef(function ResultLog({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your {result} </h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>second left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultLog;
