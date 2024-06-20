import { useState } from "react";
export default function Player() {
  const [btnEnable, setEnable] = useState(false);
  const [playerName, setPlayerName] = useState();
  
  function playerChange(event) {
    setEnable(false)
    setPlayerName(event.target.value);
  }
  
  function btnClicked() {
    setEnable(true);
  }
  return (
    <section id="player">
      <h2>Welcome {btnEnable ? playerName  : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={playerChange} defaultValue={playerName} />
        <button onClick={btnClicked}>Set Name</button>
      </p>
    </section>
  );
}
