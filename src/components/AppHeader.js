import React, { useState } from "react"
import { Link } from "react-router-dom"

const AppHeader = () => {

  const [activeLink, setActiveLink] = useState(0)
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

  const handleClick = (index) => {
    setActiveLink(index)
  }
  return (
    <header className="app-header">
      <div className="app-header__container">
        <h1 className="heading">CAVANI</h1>
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
      </div>
    </header>
  )
}

export default AppHeader
