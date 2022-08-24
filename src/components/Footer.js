import React from "react"
import tiktokIcon from "../assets/tiktok.com.png"
import facebookIcon from "../assets/facebook.com.png"
import instagramIcon from "../assets/instagram.com.png"

const Footer = () => {
  return (
    <footer className="footer-app">
      <div className="footer__container">
        <p className="footer-copywrite">Copywrite 2022</p>
        <nav className="footer__nav">
          <ul className="footer__nav__list">
            <li className="footer__nav__list-item">
              <a href="tiktok" className="nav-footer__link">
                <img className="nav-footer__link-img" src={tiktokIcon} alt="" />
              </a>
            </li>
            <li className="footer__nav__list-item">
              <a href="facebook" className="nav-footer__link">
                <img className="nav-footer__link-img" src={facebookIcon} alt="" />
              </a>
            </li>
            <li className="footer__nav__list-item">
              <a href="instagram" className="nav-footer__link">
                <img className="nav-footer__link-img" src={instagramIcon} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
