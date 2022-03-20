import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
        <Link to="/"><h2>Stream Selection</h2></Link>
        <Link to="/talks"><h2>Talks</h2></Link>
    </div>
  )
}

export default Nav

