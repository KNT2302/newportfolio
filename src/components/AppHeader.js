import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"

const AppHeader = ({ responsiveNav }) => {

  const [activeLink, setActiveLink] = useState(0)

  const toggleMenu = useRef()
  const links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Portfolio",
      to: "/portfolio",
    },
    {
      label: "News",
      to: "/news",
    },
    {
      label: "Contact",
      to: "/contact",
    },
  ]

  const handleToggle = () => {
    responsiveNav.current.classList.toggle("active")
    toggleMenu.current.classList.toggle("active")
  }

  const handleClick = (index) => {
    setActiveLink(index)
  }
  return (
    <header className="app-header">
      <div className="app-header__container">
        <h1 className="heading">CAVANI</h1>
        <div className="app-header-nav">
          <nav className="app-nav">
            <ul className="app-nav-list">
              {links.map((link, index) => (
                <li key={index} onClick={() => handleClick(index)} className={`app-nav-list-item ${activeLink === index ? "active" : null}`}>
                  <Link className="app-nav__link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="toggle-menu" ref={toggleMenu} onClick={handleToggle}></div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
