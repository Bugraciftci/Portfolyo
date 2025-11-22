import React from 'react'
import { Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">Bugra</span>
            <span className="logo-dot">.</span>
          </div>

          <p className="footer-tagline">
            Building the future, one line of code at a time
          </p>

          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} Bugra. All rights reserved.
            </p>
            <p className="made-with">
              Made with <Heart size={16} className="heart-icon" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

