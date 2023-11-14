import React from 'react'
import TourneyListItem from './TourneyListItem.jsx';
import TournamentForm from './TournamentForm.jsx';
import { useState } from 'react';

export default function Tournaments() {

  const [tournaments, setTournaments] = useState([]);

  const tournament = {
    tournamentName: 'example',
    maxPlayers: 16,
    isActive: false,
    players: ['jeff']
  }

  const tourneys = [
    { maxPlayers: 16, tournamentName: 'shawtygotafatbooty', isActive: true, players: ["jeff", "billy", "roberto"] },
    { maxPlayers: 16, tournamentName: 'poopoo caca', isActive: false, players: ["shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime", "shlime"], p1: "shlime", p2: "shloom" },
    tournament
  ]

  const handleFormSubmit = (newTournament) => {
    setTournaments((prevTournaments) => [...prevTournaments, newTournament]);
  };

  return (
    <div className="tourney-wrapper">
      {/* <TourneyListItem tourneys={tourneys} className="tourney-list" /> */}
      <TournamentForm onSubmit={handleFormSubmit} />

      {tournaments.map((tournament, index) => (
        <TourneyListItem key={index} tournament={tournament} />
      ))}
    </div>
  );
}

