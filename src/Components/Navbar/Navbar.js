import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
     <h1 className='title'>Build Your Own Board!</h1>
        <div className='navbar'>
            <a href='/' className='toggle-button' onClick={toggleMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
            </a>
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/build'>Build</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar