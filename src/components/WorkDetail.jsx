import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Github, ExternalLink, ArrowLeft, Calendar, Clock } from 'lucide-react'
import './WorkDetail.css'

const WorkDetail = () => {
  const { id } = useParams()

  const projects = [
    {
      id: 1,
      title: 'Fitness Tracker',
      description: 'A comprehensive iOS app for tracking workouts, nutrition, and health metrics with HealthKit integration.',
      category: 'ios',
      image: '📱',
      tech: ['SwiftUI', 'HealthKit', 'CoreData'],
      github: '#',
      demo: '#',
      date: 'October 2024',
      duration: '3 months',
      content: `
        ## Project Overview

        Fitness Tracker is a comprehensive iOS application designed to help users maintain a healthy lifestyle by tracking their fitness activities, nutrition intake, and health metrics. The app integrates seamlessly with Apple's HealthKit to provide accurate health data and personalized insights.

        ## Key Features

        ### Workout Tracking
        - **Custom Workouts**: Create and save personalized workout routines
        - **Exercise Library**: Access to hundreds of exercises with proper form guidance
        - **Progress Tracking**: Monitor strength gains, endurance improvements, and personal records
        - **Social Features**: Share achievements and compete with friends

        ### Nutrition Management
        - **Food Database**: Comprehensive database with nutritional information
        - **Barcode Scanner**: Quick food logging using camera-based barcode scanning
        - **Meal Planning**: Plan meals in advance with nutritional breakdowns
        - **Macro Tracking**: Monitor protein, carbs, and fat intake

        ### Health Integration
        - **HealthKit Sync**: Automatic sync with Apple Health for comprehensive health data
        - **Heart Rate Monitoring**: Real-time heart rate tracking during workouts
        - **Sleep Analysis**: Integration with sleep data for recovery insights
        - **Health Trends**: Visualize progress over time with detailed charts

        ## Technical Implementation

        ### Architecture
        The app follows MVVM architecture with SwiftUI for the user interface. Core Data is used for local data persistence, while HealthKit handles health data integration.

        ### Key Technologies
        - **SwiftUI**: Modern declarative UI framework
        - **HealthKit**: Apple's health data framework
        - **Core Data**: Local data persistence
        - **Combine**: Reactive programming for data flow
        - **Charts**: Custom chart implementations for data visualization

        ### Performance Optimizations
        - Efficient data caching to minimize HealthKit queries
        - Background processing for data synchronization
        - Optimized Core Data stack for fast data retrieval
        - Memory management for smooth scrolling in large datasets

        ## Challenges & Solutions

        ### HealthKit Integration
        One of the main challenges was properly integrating with HealthKit while respecting user privacy. The solution involved implementing proper permission requests and handling edge cases where users might deny access to certain health data.

        ### Data Synchronization
        Keeping local data in sync with HealthKit required careful implementation of background processing and conflict resolution strategies.

        ## Results

        The app successfully launched on the App Store and has received positive feedback for its intuitive design and comprehensive feature set. Users particularly appreciate the seamless HealthKit integration and the detailed progress tracking capabilities.

        ## Future Enhancements

        - Apple Watch companion app for workout tracking
        - Integration with popular fitness equipment
        - Advanced analytics and AI-powered insights
        - Community features for workout sharing
      `
    },
    {
      id: 2,
      title: 'Weather Plus',
      description: 'Beautiful weather app with detailed forecasts, interactive maps, and customizable widgets.',
      category: 'ios',
      image: '🌤️',
      tech: ['Swift', 'UIKit', 'WeatherKit'],
      github: '#',
      demo: '#',
      date: 'September 2024',
      duration: '2 months',
      content: `
        ## Project Overview

        Weather Plus is a beautifully designed weather application that provides detailed weather forecasts, interactive maps, and customizable widgets. The app focuses on delivering accurate weather information with an elegant user interface.

        ## Key Features

        ### Detailed Forecasts
        - **7-Day Forecast**: Extended weather predictions with hourly breakdowns
        - **Hourly Updates**: Real-time weather updates throughout the day
        - **Weather Alerts**: Push notifications for severe weather conditions
        - **Precipitation Maps**: Interactive radar maps showing precipitation patterns

        ### Interactive Maps
        - **Weather Overlay**: Real-time weather data overlaid on maps
        - **Temperature Visualization**: Color-coded temperature maps
        - **Wind Patterns**: Visual representation of wind speed and direction
        - **Customizable Layers**: Toggle different weather data layers

        ### Widgets & Customization
        - **Home Screen Widgets**: Multiple widget sizes for quick weather access
        - **Customizable Themes**: Dark and light modes with accent colors
        - **Location Management**: Add and organize multiple locations
        - **Units Preferences**: Choose between metric and imperial units

        ## Technical Implementation

        ### Weather Data
        The app uses WeatherKit for accurate weather data and integrates with Core Location for precise location services.

        ### Performance
        - Efficient caching system for weather data
        - Background refresh for widget updates
        - Optimized map rendering for smooth interactions
        - Minimal battery usage through smart update intervals

        ## Design Philosophy

        Weather Plus emphasizes clean, minimal design with focus on readability and accessibility. The app uses Apple's Human Interface Guidelines to ensure a native iOS experience.
      `
    },
    {
      id: 3,
      title: 'Task Manager Pro',
      description: 'Elegant task management app with team collaboration, reminders, and cloud sync.',
      category: 'ios',
      image: '✅',
      tech: ['SwiftUI', 'Firebase', 'Combine'],
      github: '#',
      demo: '#',
      date: 'August 2024',
      duration: '4 months',
      content: `
        ## Project Overview

        Task Manager Pro is a comprehensive productivity application designed for both individual users and teams. It combines elegant design with powerful collaboration features to help users stay organized and productive.

        ## Key Features

        ### Task Management
        - **Smart Organization**: Automatic categorization and priority suggestions
        - **Recurring Tasks**: Set up tasks that repeat automatically
        - **Subtasks**: Break down complex tasks into manageable steps
        - **Due Date Management**: Smart reminders and deadline tracking

        ### Team Collaboration
        - **Shared Projects**: Collaborate on projects with team members
        - **Real-time Updates**: Live synchronization across all devices
        - **Comment System**: Discuss tasks and projects with team members
        - **Permission Management**: Control access levels for different team members

        ### Cloud Sync
        - **Cross-Platform**: Sync across iOS, macOS, and web platforms
        - **Offline Support**: Work offline with automatic sync when connected
        - **Backup & Restore**: Automatic backup with easy restore options
        - **Version History**: Track changes and restore previous versions

        ## Technical Implementation

        ### Backend Infrastructure
        - **Firebase**: Real-time database and authentication
        - **Cloud Functions**: Server-side logic for complex operations
        - **Push Notifications**: Real-time updates and reminders

        ### Frontend Architecture
        - **SwiftUI**: Modern declarative UI framework
        - **Combine**: Reactive programming for data flow
        - **Core Data**: Local data persistence with CloudKit sync

        ## Security & Privacy

        Task Manager Pro prioritizes user privacy and data security with end-to-end encryption for sensitive data and compliance with GDPR regulations.
      `
    },
    {
      id: 4,
      title: 'Beat Maker Studio',
      description: 'Digital audio workstation for creating beats and melodies with virtual instruments.',
      category: 'music',
      image: '🎵',
      tech: ['Logic Pro', 'Audio Design'],
      demo: '#',
      date: 'July 2024',
      duration: '6 months',
      content: `
        ## Project Overview

        Beat Maker Studio is a comprehensive digital audio workstation designed for music producers and beat makers. The application provides professional-grade tools for creating, editing, and producing music tracks.

        ## Key Features

        ### Virtual Instruments
        - **Drum Machine**: Professional drum patterns with customizable kits
        - **Synthesizers**: Multiple synth engines for creating unique sounds
        - **Sampler**: High-quality sampling with time-stretching capabilities
        - **MIDI Support**: Full MIDI controller integration

        ### Audio Production
        - **Multi-Track Recording**: Record up to 32 simultaneous tracks
        - **Audio Effects**: Professional-grade effects including EQ, compression, and reverb
        - **Automation**: Precise automation for volume, panning, and effects
        - **Mixing Console**: Professional mixing interface with channel strips

        ### Creative Tools
        - **Pattern Sequencer**: Step sequencer for creating rhythmic patterns
        - **Chord Progression**: Built-in chord progression tools
        - **Scale Detection**: Automatic scale detection and suggestions
        - **Tempo Matching**: Automatic tempo detection and matching

        ## Technical Implementation

        ### Audio Engine
        - **Low-Latency Audio**: Optimized for real-time performance
        - **High-Quality Processing**: 32-bit floating point audio processing
        - **Plugin Support**: VST and AU plugin compatibility
        - **Audio Unit Extensions**: iOS Audio Unit support

        ### User Interface
        - **Touch-Optimized**: Designed specifically for touch interfaces
        - **Customizable Layout**: Flexible workspace arrangement
        - **Gesture Controls**: Intuitive gesture-based controls
        - **Dark Mode**: Professional dark interface option

        ## Creative Process

        Beat Maker Studio supports various music production workflows, from quick beat creation to full song production. The app includes templates and presets to help users get started quickly.
      `
    },
    {
      id: 5,
      title: 'Lo-fi Chill Mix',
      description: 'Original lo-fi hip hop tracks perfect for studying and relaxation.',
      category: 'music',
      image: '🎧',
      tech: ['Music Production', 'Mixing'],
      demo: '#',
      date: 'June 2024',
      duration: '2 months',
      content: `
        ## Project Overview

        Lo-fi Chill Mix is a collection of original lo-fi hip hop tracks designed for studying, relaxation, and focus. The project explores the intersection of nostalgia, ambient soundscapes, and hip hop aesthetics.

        ## Musical Style

        ### Lo-fi Aesthetics
        - **Vinyl Crackle**: Authentic vinyl record textures and imperfections
        - **Warm Analog Sound**: Tape saturation and analog warmth
        - **Chill Vibes**: Relaxed tempos and mellow melodies
        - **Hip Hop Elements**: Classic hip hop drum patterns and samples

        ### Production Techniques
        - **Sample-Based**: Creative use of vintage samples and loops
        - **Live Instruments**: Acoustic guitar and piano recordings
        - **Field Recordings**: Ambient sounds and environmental recordings
        - **Layering**: Complex layering of textures and melodies

        ## Track List

        1. **Coffee Shop Dreams** - A mellow track with jazz influences
        2. **Rainy Day Thoughts** - Ambient textures with subtle percussion
        3. **Late Night Study** - Focused beat perfect for concentration
        4. **City Lights** - Urban atmosphere with smooth melodies
        5. **Sunday Morning** - Relaxed vibes for weekend mornings

        ## Technical Details

        ### Recording Process
        - **Analog Gear**: Used vintage equipment for authentic sound
        - **Digital Processing**: Modern DAW for precise editing and mixing
        - **Mastering**: Professional mastering for optimal listening experience
        - **Format Support**: Available in multiple audio formats

        ## Reception

        The Lo-fi Chill Mix has been well-received by listeners who appreciate its authentic lo-fi sound and relaxing atmosphere. It's particularly popular among students and remote workers who need background music for focus.
      `
    },
    {
      id: 6,
      title: 'Pixel Adventure',
      description: '2D platformer game with retro aesthetics and challenging levels.',
      category: 'game',
      image: '🎮',
      tech: ['Unity', 'C#', 'Game Design'],
      github: '#',
      demo: '#',
      date: 'May 2024',
      duration: '5 months',
      content: `
        ## Project Overview

        Pixel Adventure is a 2D platformer game that pays homage to classic retro games while incorporating modern game design principles. The game features challenging levels, pixel-perfect art, and engaging gameplay mechanics.

        ## Game Features

        ### Core Gameplay
        - **Precise Controls**: Tight, responsive controls for platforming
        - **Progressive Difficulty**: Carefully designed difficulty curve
        - **Power-ups**: Various power-ups that change gameplay mechanics
        - **Secret Areas**: Hidden levels and collectibles for exploration

        ### Visual Design
        - **Pixel Art**: Hand-crafted pixel art with attention to detail
        - **Retro Aesthetics**: Classic 8-bit and 16-bit inspired visuals
        - **Smooth Animation**: Fluid character and environment animations
        - **Dynamic Lighting**: Modern lighting effects on retro graphics

        ### Level Design
        - **50+ Levels**: Diverse level designs with unique challenges
        - **Boss Battles**: Epic boss encounters with unique mechanics
        - **Environmental Puzzles**: Interactive elements and puzzle solving
        - **Multiple Paths**: Different routes through levels for replayability

        ## Technical Implementation

        ### Game Engine
        - **Unity 2D**: Professional game development engine
        - **C# Scripting**: Custom scripts for game mechanics
        - **Physics System**: Precise 2D physics for platforming
        - **Audio System**: Dynamic audio with adaptive music

        ### Performance Optimization
        - **Efficient Rendering**: Optimized sprite rendering pipeline
        - **Memory Management**: Careful memory allocation and cleanup
        - **Frame Rate**: Consistent 60 FPS on target platforms
        - **Loading Times**: Fast level loading and transitions

        ## Game Design Philosophy

        Pixel Adventure focuses on the core platforming experience with tight controls and fair but challenging level design. The game rewards skill and patience while providing multiple difficulty options for different player types.

        ## Development Process

        The game was developed over 5 months with a focus on iterative design and player feedback. Early prototypes were tested extensively to ensure the core mechanics felt satisfying and responsive.
      `
    },
    {
      id: 7,
      title: 'Puzzle Quest',
      description: 'Mind-bending puzzle game with unique mechanics and beautiful visuals.',
      category: 'game',
      image: '🧩',
      tech: ['Unity', 'C#', 'Level Design'],
      github: '#',
      demo: '#',
      date: 'April 2024',
      duration: '3 months',
      content: `
        ## Project Overview

        Puzzle Quest is a unique puzzle game that combines traditional puzzle mechanics with innovative gameplay elements. The game challenges players' logical thinking while providing a visually stunning experience.

        ## Game Mechanics

        ### Core Puzzles
        - **Logic Puzzles**: Traditional logic-based challenges
        - **Pattern Recognition**: Visual and numerical pattern solving
        - **Spatial Reasoning**: 3D spatial awareness puzzles
        - **Mathematical Challenges**: Number-based puzzle mechanics

        ### Unique Features
        - **Dynamic Rules**: Puzzle rules that change and evolve
        - **Multi-Step Solutions**: Complex puzzles requiring multiple steps
        - **Hint System**: Progressive hints to help players learn
        - **Time Challenges**: Optional time-based challenges for experts

        ## Visual Design

        ### Art Style
        - **Minimalist Design**: Clean, uncluttered visual design
        - **Color Psychology**: Strategic use of color for puzzle elements
        - **Smooth Transitions**: Elegant animations and transitions
        - **Accessibility**: High contrast modes and colorblind support

        ### User Interface
        - **Intuitive Controls**: Simple touch and drag interactions
        - **Clear Feedback**: Visual and audio feedback for actions
        - **Progress Tracking**: Clear indication of puzzle progress
        - **Customizable Settings**: Adjustable difficulty and visual options

        ## Technical Implementation

        ### Puzzle Engine
        - **Modular System**: Flexible puzzle creation system
        - **Rule Engine**: Dynamic rule system for puzzle mechanics
        - **State Management**: Efficient puzzle state tracking
        - **Solution Validation**: Automated solution checking

        ### Performance
        - **Optimized Rendering**: Efficient UI and puzzle rendering
        - **Memory Efficiency**: Minimal memory footprint
        - **Battery Optimization**: Low power consumption
        - **Cross-Platform**: Consistent experience across devices

        ## Educational Value

        Puzzle Quest is designed to be both entertaining and educational, helping players develop critical thinking skills, pattern recognition, and logical reasoning abilities.

        ## Accessibility

        The game includes comprehensive accessibility features including screen reader support, customizable text sizes, and alternative input methods for players with different needs.
      `
    }
  ]

  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="work-detail-page">
        <div className="container">
          <div className="work-detail-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/work" className="btn btn-primary">
              <ArrowLeft size={18} />
              Back to Work
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="work-detail-page">
      <div className="work-detail-header">
        <div className="container">
          <Link to="/work" className="back-button">
            <ArrowLeft size={20} />
            Back to Work
          </Link>
          
          <div className="work-detail-title-section">
            <div className="work-detail-emoji">{project.image}</div>
            <h1>{project.title}</h1>
            <p className="work-detail-description">{project.description}</p>
            
            <div className="work-detail-meta">
              <div className="meta-item">
                <Calendar size={16} />
                <span>{project.date}</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{project.duration}</span>
              </div>
            </div>

            <div className="work-detail-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="work-detail-links">
              {project.github && (
                <a href={project.github} className="work-detail-link" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  <span>View Code</span>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="work-detail-link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
          
          <div className="work-detail-divider"></div>
        </div>
      </div>

      <div className="work-detail-content">
        <div className="container">
          <div className="work-detail-body">
            <div className="work-detail-text">
              {project.content.split('\n').map((line, index) => {
                if (line.trim() === '') return <br key={index} />
                
                if (line.startsWith('## ')) {
                  return <h2 key={index}>{line.replace('## ', '')}</h2>
                }
                
                if (line.startsWith('### ')) {
                  return <h3 key={index}>{line.replace('### ', '')}</h3>
                }
                
                if (line.startsWith('- **')) {
                  const text = line.replace('- **', '').replace('**', '')
                  return (
                    <li key={index}>
                      <strong>{text.split(':')[0]}</strong>
                      {text.includes(':') && `: ${text.split(':')[1]}`}
                    </li>
                  )
                }
                
                if (line.startsWith('- ')) {
                  return <li key={index}>{line.replace('- ', '')}</li>
                }
                
                if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                  return <strong key={index}>{line.replace(/\*\*/g, '')}</strong>
                }
                
                return <p key={index}>{line}</p>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkDetail
