import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="navbar">
      <div className="container nav-center">
        <a href="#home" className="logo">Portfolio</a>
        <div className={`nav-links ${showMenu ? 'show' : ''}`}>
          <a href="#home" onClick={() => setShowMenu(false)}>Home</a>
          <a href="#about" onClick={() => setShowMenu(false)}>About</a>
          <a href="#skills" onClick={() => setShowMenu(false)}>Skills</a>
          <a href="#projects" onClick={() => setShowMenu(false)}>Projects</a>
          <a href="#contact" onClick={() => setShowMenu(false)}>Contact</a>
        </div>
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar