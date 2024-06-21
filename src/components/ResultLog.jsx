import { forwardRef, useImperativeHandle, useRef} from "react";

const ResultLog = forwardRef(function ResultLog({ result, targetTime, timeRemaining, timeComplete}, ref) {
  
  const gameResult = (timeRemaining / 1000).toFixed(2)
    const userLost= timeRemaining<=0
    const score=Math.round((1-timeRemaining / (targetTime * 1000))*100)
    const dialog=useRef();
  
    useImperativeHandle(ref, ()=>{
        return {
            open(){
                    dialog.current.showModal()
            }
        }
    })

    return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost The Challenge</h2> }
      {!userLost && <h2>Your Score : {score}</h2> }
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
         You stopped the timer with <strong>{gameResult} second left.</strong>
      </p>
      <form method="dialog" onSubmit={timeComplete}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultLog;
