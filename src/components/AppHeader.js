import React from "react"
import { Link } from "react-router-dom"

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="app-header__container">
        <h1>KAYSTIM</h1>
        <nav className="app-nav">
          <ul className="app-nav-list">
            <li className="app-nav-list-item">
              <Link className="app-nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="app-nav-list-item">
              <Link className="app-nav__link" to="/about">
                About
              </Link>
            </li>
            <li className="app-nav-list-item">
              <Link className="app-nav__link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="app-nav-list-item">
              <Link className="app-nav__link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
