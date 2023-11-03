
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className="root-wrapper">
      <div className="root-nav">
        <img className="nav-logo" src="img/pong-logo.png" />
        <div className="root-nav-element">
          <img src="img/play-button.png" />
          <span>Play</span>
        </div>
        <div className="root-nav-element">
          <img src="img/default-user.png" />
          <span>Profile</span>
        </div>
        <div className="root-nav-element">
          <img src="img/friends.png" />
          <span>Friends</span>
        </div>
        <div className="root-nav-element">
          <img src="img/chat.png" />
          <span>Chat</span>
        </div>
        <div className="root-nav-element">
          <img src="img/tournament.png" />
          <span>Tournament</span>
        </div>
      </div>
      <div className="root-content">
        <Outlet />
      </div>
    </div>
  )
}
