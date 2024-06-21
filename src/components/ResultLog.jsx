export default function ResultLog({result,targetTime}){
    return (
        <dialog className="result-modal" open>
            <h2>Your Score :{result} </h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>second left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}