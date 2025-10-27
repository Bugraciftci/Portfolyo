import React from 'react'
import { Code, Music, Gamepad2, Smartphone, Zap, Heart } from 'lucide-react'
import './About.css'

const About = () => {
  const skills = [
    {
      icon: <Smartphone size={32} />,
      title: 'iOS Development',
      description: 'Expert in Swift, SwiftUI, and UIKit. Building native apps with clean architecture and smooth UX.',
      color: 'blue'
    },
    {
      icon: <Music size={32} />,
      title: 'Music Production',
      description: 'Creating beats and melodies. Exploring sound design and audio engineering in my free time.',
      color: 'purple'
    },
    {
      icon: <Gamepad2 size={32} />,
      title: 'Game Development',
      description: 'Passionate about game mechanics and interactive experiences. Learning Unity and game design principles.',
      color: 'orange'
    }
  ]

  const technologies = [
    'Swift',
    'SwiftUI',
    'UIKit',
    'CoreData',
    'Combine',
    'Firebase',
    'REST APIs',
    'Git',
    'Xcode',
    'Logic Pro',
    'Unity',
    'C#'
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
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
              I approach problem-solving in software development. I believe the intersection
              of technology and creativity is where the most innovative solutions emerge.
            </p>

            <div className="tech-stack">
              <h3>Technologies I work with:</h3>
              <div className="tech-tags">
                {technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className={`skill-card skill-${skill.color}`}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="stat-icon">
              <Code size={24} />
            </div>
            <div className="stat-content">
              <h4>5+</h4>
              <p>Years Coding</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <Zap size={24} />
            </div>
            <div className="stat-content">
              <h4>20+</h4>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <Heart size={24} />
            </div>
            <div className="stat-content">
              <h4>100%</h4>
              <p>Passion Driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

