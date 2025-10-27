import React from 'react'
import { Music, Gamepad2, Smartphone, Code, Palette, Zap } from 'lucide-react'
import './About.css'

const About = () => {
  const skills = [
    {
      icon: <Smartphone size={28} />,
      title: 'iOS Development',
      description: 'Expert in Swift, SwiftUI, and UIKit. Building native apps with clean architecture and smooth UX.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Music size={28} />,
      title: 'Music Production',
      description: 'Creating beats and melodies. Exploring sound design and audio engineering in my free time.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Gamepad2 size={28} />,
      title: 'Game Development',
      description: 'Passionate about game mechanics and interactive experiences. Learning Unity and game design principles.',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600'
    }
  ]

  const highlights = [
    {
      icon: <Code size={24} />,
      text: 'Clean, maintainable code'
    },
    {
      icon: <Palette size={24} />,
      text: 'Beautiful user interfaces'
    },
    {
      icon: <Zap size={24} />,
      text: 'Performance optimization'
    }
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="about-subtitle">
            Passionate developer crafting digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-intro">
              <div className="intro-text">
                <h3>Hello, I'm a creative developer</h3>
                <p className="lead">
                  I'm an iOS developer who loves creating beautiful, functional mobile applications.
                  My journey in tech is driven by curiosity and a passion for learning.
                </p>
                <p>
                  With a strong foundation in Swift and SwiftUI, I specialize in building
                  native iOS applications that prioritize user experience and performance.
                  I follow Apple's Human Interface Guidelines and best practices to create
                  apps that feel at home on Apple devices.
                </p>
                <p>
                  Beyond coding, I'm deeply interested in music production and game development.
                  These creative outlets not only fuel my imagination but also influence how
                  I approach problem-solving in software development.
                </p>
              </div>
              
              <div className="highlights">
                {highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <div className="highlight-icon">{highlight.icon}</div>
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-showcase">
              {skills.map((skill, index) => (
                <div key={index} className={`skill-card skill-${skill.color}`}>
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <h3>{skill.title}</h3>
                  </div>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

