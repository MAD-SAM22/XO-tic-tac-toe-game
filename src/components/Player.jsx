import React from 'react'
import { useState } from 'react'

export default function Player({ name, symbol }) {
    const [newPlayerName, setnewPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)

    let playerName = <span className="player-name">{newPlayerName}</span>

    function handleEditClick() {
        setIsEditing(editing => !editing); //=> runs emediatlly .
    }
    function handleNameChange(event) {
        setnewPlayerName(event.target.value);
    }

    if (isEditing) {
        playerName = <input type="text" value={newPlayerName} onChange={handleNameChange} />
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}