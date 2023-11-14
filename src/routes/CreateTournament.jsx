import React from 'react'

export default function CreateTournament() {



  return (
    <div className="create-tournament-wrapper">
      <div className="create-tournament-inputs">
        <input type="text" placeholder='Tournament Name' />
        <input type='number' min="0" max="16" placeholder='Max Players'/>
        <input type="text" placeholder='Add player' />
        <button>Add</button>
      </div>
    </div>
  )
}
