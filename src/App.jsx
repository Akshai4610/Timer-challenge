import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Beginner"} targetedTime={1}/>
        <TimerChallenge title={"Armature"} targetedTime={5}/>
        <TimerChallenge title={"Intermediate"} targetedTime={10}/>
        <TimerChallenge title={"Professional"} targetedTime={15}/>
      </div>
    </>
  );
}

export default App;
