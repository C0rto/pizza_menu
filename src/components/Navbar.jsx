import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import image from '../assets/logo.png'

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={image} alt="" className="logo-img" />
          <button className="nav-btn" onClick={() => setNavOpen(!navOpen)}>
            <FaBars
              style={{
                fontSize: '2.4rem',
                fontWeight: 'bold',
                color: '#f44708',
              }}
            />
          </button>
        </div>

        <ul className={`${!navOpen ? 'nav-links' : 'nav-links show-links'}`}>
          <li>
            <a href="" className="nav-link">
              Pizze
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Special
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Birre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
