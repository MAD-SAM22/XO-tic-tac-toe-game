import React from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"Player 1"} symbol={"X"} />
          <Player name={"Player 2"} symbol={"O"} />
        </ol>
        <div id="game-board">
          <GameBoard />
        </div>
      </div>

      Log
    </main>
  )
}

export default App
