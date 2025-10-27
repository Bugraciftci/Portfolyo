import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import './Work.css'
import './Blog.css'

const Work = () => {

  const projects = [
    {
      id: 1,
      title: 'Fitness Tracker',
      description: 'A comprehensive iOS app for tracking workouts, nutrition, and health metrics with HealthKit integration.',
      category: 'ios',
      image: '📱',
      date: 'Oct 20, 2025',
      readTime: '5 min read',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Weather Plus',
      description: 'Beautiful weather app with detailed forecasts, interactive maps, and customizable widgets.',
      category: 'ios',
      image: '🌤️',
      date: 'Oct 15, 2025',
      readTime: '4 min read',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Task Manager Pro',
      description: 'Elegant task management app with team collaboration, reminders, and cloud sync.',
      category: 'ios',
      image: '✅',
      date: 'Oct 10, 2025',
      readTime: '6 min read',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Beat Maker Studio',
      description: 'Digital audio workstation for creating beats and melodies with virtual instruments.',
      category: 'music',
      image: '🎵',
      date: 'Sep 28, 2025',
      readTime: '5 min read',
      demo: '#'
    },
    {
      id: 5,
      title: 'Lo-fi Chill Mix',
      description: 'Original lo-fi hip hop tracks perfect for studying and relaxation.',
      category: 'music',
      image: '🎧',
      date: 'Sep 20, 2025',
      readTime: '3 min read',
      demo: '#'
    },
    {
      id: 6,
      title: 'Pixel Adventure',
      description: '2D platformer game with retro aesthetics and challenging levels.',
      category: 'game',
      image: '🎮',
      date: 'Sep 15, 2025',
      readTime: '7 min read',
      github: '#',
      demo: '#'
    },
    {
      id: 7,
      title: 'Puzzle Quest',
      description: 'Mind-bending puzzle game with unique mechanics and beautiful visuals.',
      category: 'game',
      image: '🧩',
      date: 'Sep 10, 2025',
      readTime: '6 min read',
      github: '#',
      demo: '#'
    }
  ]

  const categoryInfo = {
    ios: {
      title: 'iOS Development',
      emoji: '📱',
      description: 'Native iOS applications built with Swift and SwiftUI, focusing on user experience and performance.'
    },
    music: {
      title: 'Music Production',
      emoji: '🎵',
      description: 'Original music compositions and audio productions created with professional tools and techniques.'
    },
    game: {
      title: 'Game Development',
      emoji: '🎮',
      description: 'Interactive games and experiences developed using Unity and modern game design principles.'
    }
  }

  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = []
    }
    acc[project.category].push(project)
    return acc
  }, {})

  return (
    <div className="work-page">
      <div className="work-header">
        <div className="container">
          <div className="work-title-section">
            <h1>Work</h1>
            <p className="work-main-description">A collection of my projects spanning iOS development, music production, and game development. Each project represents a unique challenge and learning experience.</p>
          </div>
          <div className="work-divider"></div>
        </div>
      </div>

      <div className="work-content">
        <div className="container">
          {Object.entries(groupedProjects).map(([category, categoryProjects]) => {
            const info = categoryInfo[category]
            return (
              <div key={category} className="work-category-section">
                <div className="work-category-header">
                  <div className="work-category-title-section">
                    <h2 className="work-category-title">
                      <span className="work-category-emoji">{info.emoji}</span>
                      {info.title}
                    </h2>
                    <p className="work-category-description">{info.description}</p>
                  </div>
                  <div className="work-category-divider"></div>
                </div>

                <div className="blog-grid">
                  {categoryProjects.map(project => (
                    <Link key={project.id} to={`/work/${project.id}`} className={`blog-card ${category === 'ios' ? 'blog-blue' : category === 'music' ? 'blog-purple' : 'blog-orange'}`}>
                      <div className="blog-image">
                        <div className="blog-emoji">{project.image}</div>
                        <div className="blog-category">{categoryInfo[category].title}</div>
                      </div>
                      <div className="blog-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="blog-meta">
                          <div className="meta-item">
                            <Calendar size={16} />
                            <span>{project.date}</span>
                          </div>
                          <div className="meta-item">
                            <Clock size={16} />
                            <span>{project.readTime}</span>
                          </div>
                        </div>
                        <div className="read-more">
                          <span>Read More</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Work
