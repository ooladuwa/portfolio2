import React from 'react'
import { Link, Switch, Route } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-container">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Links
