import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import './routes/Root.css'
import './routes/Game.css'
import './routes/Profile.css'
import './routes/Tournaments.css'
import './routes/Chat.css'

import Root from './routes/Root.jsx'
import Game from './routes/Game.jsx'
import Profile from './routes/Profile.jsx'
import Chat from './routes/Chat.jsx'
import Tournament from './routes/Tournaments.jsx'
import CreateTournament from './routes/CreateTournament.jsx'


import ErrorPage from './ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Game },
      { path: "profile", Component: Profile },
      { path: "chat", Component: Chat },
      { path: "tournament", Component: Tournament },
      { path: "create-tournament", Component: CreateTournament },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
