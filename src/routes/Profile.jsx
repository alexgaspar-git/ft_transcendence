import React from 'react'

export default function Profile() {

  function getPercent(win, loss) {
    return (Math.round((win / (win + loss)) * 100))
  }

  return (
    <div className="profile-wrapper">
        <div className="left-profile">
            <img src="img/default-pp.jpg" />
            <span className="profile-username">
              Default User
            </span>
            <span className="profile-winrate">
              42W - 19L ({getPercent(42, 19)}%)
            </span>
            <button type="button" class="btn btn-light">
              Edit
            </button>
        </div>
        <div className="right-profile">

        </div>
    </div>
  )
}
