import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations'

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function driveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].Player == "X") { currentPlayer = "O" }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = driveActivePlayer(gameTurns);

  let gameBoard = initalGameBoard;

  let winner;
  gameTurns.forEach(turn => {
    const { row, col } = turn.square;
    gameBoard[row][col] = turn.Player;
  });

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[[combination[0].row][combination[0].column]];
    const secondSquare = gameBoard[[combination[1].row][combination[1].column]];
    const thirdSquare = gameBoard[[combination[2].row][combination[2].column]];

    if (firstSquare != null && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = firstSquare;
      break;
    }
  }
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
        {winner && <div id="winner">Winner is {winner}</div>}
        <div id="game-board">
          <GameBoard onSelectSquare={handleSquareClick} board={gameBoard} />
        </div>
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
