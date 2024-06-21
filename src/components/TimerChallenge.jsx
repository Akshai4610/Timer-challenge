import { useState, useRef } from "react"
import ResultLog from "./ResultLog"

export default function TimerChallenge({title,targetedTime}){

    const timer=useRef()
    const[timeStarted,setTime]=useState(false)
    const[timeExpired,setTimeExpire]=useState(false)

    function startTime(){
        setTime(true)
        timer.current=setTimeout(() => {
           setTimeExpire(true) 
        }, targetedTime * 1000);
    }

    function stopTime(){
        clearTimeout(timer.current)
    }

    return(
        <>
        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetedTime} second {targetedTime>1 ? 's' : ' '}
        </p>
        <p>
            <button onClick={timeStarted ? stopTime :startTime}>{timeStarted ? "stop" : "Start"} Challenge</button>
        </p>
        <p className={timeStarted ? 'active' :undefined}>
            {timeStarted ? "Timer running......" : "Timer  Inactive"}
        </p>
        </section>
        {timeExpired && <ResultLog targetTime={targetedTime} result='Lost'/>}
        </>
    )
}