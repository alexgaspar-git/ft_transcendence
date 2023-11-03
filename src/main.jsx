import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import './routes/Root.css'
import './routes/Game.css'

import Root from './routes/Root.jsx'
import Game from './routes/Game.jsx'

import ErrorPage from './ErrorPage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Game },
      // { path: "profile", Component: Profile },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
