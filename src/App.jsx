import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

function driveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].Player == "X") { currentPlayer = "O" }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = driveActivePlayer(gameTurns);

  function handleSquareClick(rowIndex, colIndex) {

    setGameTurns(prevGameTurns => {
      const currentPlayer = driveActivePlayer(gameTurns);

      const newGameTurns = [{ square: { row: rowIndex, col: colIndex }, Player: currentPlayer }, ...prevGameTurns];
      return newGameTurns;
    }
    );
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name={"Player 1"} symbol={"X"} isActive={currentPlayer === "X"} />
          <Player name={"Player 2"} symbol={"O"} isActive={currentPlayer === "O"} />
        </ol>
        <div id="game-board">
          <GameBoard onSelectSquare={handleSquareClick} turns={gameTurns} />
        </div>
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
