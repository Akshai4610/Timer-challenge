import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [currentPlayer, setPlayerName] = useState(null);
  
  function btnClicked() {
    setPlayerName(playerName.current.value);
    playerName.current.value=''
  }
  
  return (
    <section id="player">
      <h2>Welcome {currentPlayer ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={btnClicked}>Set Name</button>
      </p>
    </section>
  );
}
