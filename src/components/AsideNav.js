import React, { useRef } from "react"
import { Link } from "react-router-dom"
import authorImg from "../assets/author.jpg"
import tiktokIcon from "../assets/tiktok.com.png"
import facebookIcon from "../assets/facebook.com.png"
import instagramIcon from "../assets/instagram.com.png"
const AsideNav = ({ responsiveNav }) => {

  return (
    <aside className="responsive-nav" ref={responsiveNav}>
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
      <footer className="sidenav-footer">
        <nav className="sidenav-footer__nav">
          <ul className="sidenav-footer__nav__list">
            <li className="sidenav-footer__nav__item">
              <a href="tiktok" className="sidenav-footer__nav__item-link">
                <img className="sidenav-footer__nav__item-link-img" src={tiktokIcon} alt="" />
              </a>
            </li>
            <li className="sidenav-footer__nav__item">
              <a href="tiktok" className="sidenav-footer__nav__item-link">
                <img className="sidenav-footer__nav__item-link-img" src={facebookIcon} alt="" />
              </a>
            </li>
            <li className="sidenav-footer__nav__item">
              <a href="tiktok" className="sidenav-footer__nav__item-link">
                <img className="sidenav-footer__nav__item-link-img" src={instagramIcon} alt="" />
              </a>
            </li>
          </ul>
        </nav>
        <p className="sidenav-footer__copywriter">Copywrite 2022</p>
      </footer>
    </aside>
  )
}

export default AsideNav
