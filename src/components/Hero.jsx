import React from 'react'
import { Github, Linkedin, Mail, Apple, Music, Gamepad2 } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span className="wave">👋</span>
            <span>Hi, I'm Bugra</span>
          </div>

          <h1 className="hero-title">
            iOS Developer &<br />
            <span className="gradient-text">Creative Technologist</span>
          </h1>

          <p className="hero-description">
            Crafting beautiful mobile experiences with Swift & SwiftUI.
            When I'm not coding, you'll find me exploring music production
            and game development.
          </p>

          <div className="hero-tags">
            <span className="tag"><Apple size={16} /> iOS Development</span>
            <span className="tag"><Music size={16} /> Music Production</span>
            <span className="tag"><Gamepad2 size={16} /> Game Dev</span>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToPortfolio}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Get In Touch
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <span className="window-title">Portfolio.swift</span>
            </div>
            <div className="code-content">
              <pre>
{`import SwiftUI

struct Developer {
    let name = "Bugra"
    let skills = [
        "iOS Development",
        "SwiftUI & UIKit",
        "Music Production",
        "Game Development"
    ]
    
    func create() -> App {
        return AmazingApp()
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

