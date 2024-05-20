import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root'
import Projects from './routes/Projects'
import About from './routes/About'
import Contact from './routes/Contact'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
