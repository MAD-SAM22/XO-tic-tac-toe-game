
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">player1</span>
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player-name">player2</span>
            <span className="player-symbol">O</span>
            <button>Edit</button>
          </li>
        </ol>
        Game Board
      </div>

      Log
    </main>
  )
}

export default App
