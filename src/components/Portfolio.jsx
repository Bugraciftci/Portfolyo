import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import './Portfolio.css'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: 'Fitness Tracker',
      description: 'A comprehensive iOS app for tracking workouts, nutrition, and health metrics with HealthKit integration.',
      category: 'ios',
      image: '📱',
      tech: ['SwiftUI', 'HealthKit', 'CoreData'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Weather Plus',
      description: 'Beautiful weather app with detailed forecasts, interactive maps, and customizable widgets.',
      category: 'ios',
      image: '🌤️',
      tech: ['Swift', 'UIKit', 'WeatherKit'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Task Manager Pro',
      description: 'Elegant task management app with team collaboration, reminders, and cloud sync.',
      category: 'ios',
      image: '✅',
      tech: ['SwiftUI', 'Firebase', 'Combine'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Beat Maker Studio',
      description: 'Digital audio workstation for creating beats and melodies with virtual instruments.',
      category: 'music',
      image: '🎵',
      tech: ['Logic Pro', 'Audio Design'],
      demo: '#'
    },
    {
      id: 5,
      title: 'Lo-fi Chill Mix',
      description: 'Original lo-fi hip hop tracks perfect for studying and relaxation.',
      category: 'music',
      image: '🎧',
      tech: ['Music Production', 'Mixing'],
      demo: '#'
    },
    {
      id: 6,
      title: 'Pixel Adventure',
      description: '2D platformer game with retro aesthetics and challenging levels.',
      category: 'game',
      image: '🎮',
      tech: ['Unity', 'C#', 'Game Design'],
      github: '#',
      demo: '#'
    },
    {
      id: 7,
      title: 'Puzzle Quest',
      description: 'Mind-bending puzzle game with unique mechanics and beautiful visuals.',
      category: 'game',
      image: '🧩',
      tech: ['Unity', 'C#', 'Level Design'],
      github: '#',
      demo: '#'
    }
  ]

  const filteredProjects = projects

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Work</h2>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-emoji">{project.image}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                      <span>View</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

