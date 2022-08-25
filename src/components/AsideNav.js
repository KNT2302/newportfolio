import React, { useRef } from "react"
import { Link } from "react-router-dom"
import authorImg from "../assets/music.jpg"
const AsideNav = () => {
  const responsiveNav = useRef(null)
  const handleToggle = () => {
    responsiveNav.current.classList.toggle("active")
  }
  return (
    <aside className="responsive-nav" ref={responsiveNav}>
      <div className="toggle-menu" onClick={handleToggle}></div>
      <div className="image">
        <img className="author-img" src={authorImg} alt="" />
      </div>
      <nav className="app-sidenav">
        <ul className="app-sidenav-list">
          <li className="app-sidenav-list-item">
            <Link className="app-sidenav__link" to="/">
              Home
            </Link>
          </li>
          <li className="app-sidenav-list-item">
            <Link className="app-sidenav__link" to="/about">
              About
            </Link>
          </li>
          <li className="app-sidenav-list-item">
            <Link className="app-sidenav__link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="app-sidenav-list-item">
            <Link className="app-sidenav__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default AsideNav
