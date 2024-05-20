import React from 'react'
import '../styles/Root.css'
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <>
        <h1>Hey!</h1>
        <p>My name is Patrick Yuson. Welcome to my Portfolio App!</p>
        <Link to={`projects`}>Projects</Link>
        <br></br>
        <Link to={`about`}>About</Link>
        <br></br>
        <Link to={`contact`}>Contact Me</Link>
    </>
  )
}

export default Root