
import React, { useEffect, useState } from 'react'
import { Outlet , NavLink } from 'react-router-dom'


let i = 0

export default function Root() {

  return (
    <div className="root-wrapper">
      <div className="root-nav">
        <img className="nav-logo" src="img/pong-logo.png" />
          <NavLink to={'/'}>
            <div className="root-nav-element">
                <img src="img/play-button.png" />
                <span className='nav-link-text'>Play</span>
            </div>
          </NavLink>
          <NavLink to={'/profile'}>
            <div className="root-nav-element">
                <img src="img/default-user.png" />
                <span className='nav-link-text'>Profile</span>
            </div>
          </NavLink>
        <div className="root-nav-element">
          <img src="img/friends.png" />
          <span className='nav-link-text'>Friends</span>
        </div>
        <NavLink to='/chat'>
          <div className="root-nav-element">
            <img src="img/chat.png" />
            <span className='nav-link-text'>Chat</span>
          </div>
        </NavLink>
        <NavLink to='/tournament'>
          <div className="root-nav-element">
            <img src="img/tournament.png" />
            <span className='nav-link-text'>Tournament</span>
          </div>
        </NavLink>
      </div>
      <div className="root-content">
        <Outlet />
      </div>
    </div>
  )
}