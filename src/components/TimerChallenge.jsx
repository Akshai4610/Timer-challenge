export default function TimerChallenge({title,targetedTime}){
    return(
        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetedTime} second {targetedTime>1 ? 's' : ' '}
        </p>
        <p>
            <button>Start Challenge</button>
        </p>
        <p className="">
            Timer  Inactive
        </p>
        </section>
    )
}