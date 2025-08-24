import { useState } from "react"

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, turns }) {

    let gameBoard = initalGameBoard;

    turns.forEach(turn => {
        const { row, col } = turn.square;
        gameBoard[row][col] = turn.Player
    });

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex} >
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex} >
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}> {playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}