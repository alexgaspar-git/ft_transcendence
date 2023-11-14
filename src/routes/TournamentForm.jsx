import React from 'react'
import { useState } from 'react';

const TournamentForm = ({ onSubmit }) => {

    const [tournamentData, setTournamentData] = useState({
        name: '',
        max: 0,
        players: []
    });

    const [newPlayer, setNewPlayer] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTournamentData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleAddPlayer = () => {
        setTournamentData((prevData) => ({
            ...prevData,
            players: [...prevData.players, newPlayer]
        }));
        setNewPlayer(''); // Clear the input field after adding a player
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(tournamentData);
    }

    const handleDeletePlayer = (index) => {
        setTournamentData((prevData) => {
            const newPlayers = [...prevData.players];
            newPlayers.splice(index, 1); // Remove the player at the specified index
            return { ...prevData, players: newPlayers };
        });
    };

    return (
        <div className='tournament-form-wrapper'>
            <input type="text" name="name" value={tournamentData.name} placeholder="tournament name" onChange={handleChange} />
            <input type="number" min="0" max="16" name="max" value={tournamentData.max} placeholder="max players" onChange={handleChange} />


            {/* Input field for adding players */}
            <div>
                <input
                    type="text"
                    value={newPlayer}
                    placeholder="Add Player"
                    onChange={(e) => setNewPlayer(e.target.value)}
                />
                <button onClick={handleAddPlayer}>Add</button>
            </div>

            {/* Display the list of players */}
            <div>
                <h3>Players:</h3>
                <ul>
                    {tournamentData.players.map((player, index) => (
                        <li key={index}>
                            <span>{player}</span>
                            <button onClick={() => handleDeletePlayer(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default TournamentForm;
