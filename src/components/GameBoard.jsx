import { useState } from "react"

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initalGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard(prevGameBoard => {
            const newGameBoard = prevGameBoard.map(row => [...row])
            newGameBoard[rowIndex][colIndex] = "X"
            return newGameBoard
        })
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex} >
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex} >
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}> {playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}