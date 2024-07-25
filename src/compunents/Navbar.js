import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <header  id="home">
      <div className="bgshadow">

      </div>
      <nav className="navbar">
        <div className="logo">
            <Link>NS <span>Coders</span></Link>
        </div>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="items">
          
          
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link  to="/services">Services</Link>
                </li>
                <li>
                    <Link  to="/about">About</Link>
                </li>
                <li>
                    <Link  to="/contact">Contact</Link>
                </li>
            </ul>
            {/* <div className="srch">

            </div> */}
        </div>
      </nav>
      </header>
    </>
  )
}

export default Navbar
