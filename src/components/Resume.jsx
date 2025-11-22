import React from 'react';
import { MapPin, Code, Briefcase, GraduationCap, Book } from 'lucide-react';
import './Resume.css';

const Resume = () => {

  const resumeData = {
    personal: {
      name: "Muhammed Buğra Çiftçi",
      title: "iOS Developer",
      location: "Turkey"
    },
    
    summary: "Passionate iOS developer specializing in Swift and SwiftUI. Experienced in building elegant, user-friendly mobile applications with clean architecture. Also active in music production and game development, bringing creative problem-solving skills to every project.",
    
    experience: [
      {
        title: "iOS Developer",
        company: "Freelance",
        period: "2022 - Present",
        location: "Remote",
        responsibilities: [
          "Developed multiple iOS applications from concept to App Store deployment",
          "Implemented complex UI/UX designs using SwiftUI and UIKit",
          "Integrated RESTful APIs and third-party services",
          "Applied MVVM and Clean Architecture patterns",
          "Maintained 95%+ code coverage with unit tests"
        ]
      },
      {
        title: "Mobile App Developer",
        company: "Personal Projects",
        period: "2021 - 2022",
        location: "Turkey",
        responsibilities: [
          "Created iOS games using SpriteKit and GameKit frameworks",
          "Built music production apps with Core Audio",
          "Implemented data persistence with Core Data and UserDefaults",
          "Published apps on the Apple App Store"
        ]
      }
    ],
    
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University",
        period: "2020 - 2024",
        location: "Turkey",
        details: "Focus on mobile development, software engineering, and algorithms"
      }
    ],
    
    skills: {
      "Programming Languages": ["Swift", "Objective-C", "JavaScript", "Python"],
      "iOS Frameworks": ["SwiftUI", "UIKit", "Core Data", "Core Animation", "Combine"],
      "Development Tools": ["Xcode", "Git", "CocoaPods", "Swift Package Manager"],
      "Game Development": ["SpriteKit", "GameKit", "SceneKit"],
      "Music Production": ["Logic Pro", "Core Audio", "AVFoundation"],
      "Other": ["REST APIs", "Firebase", "TestFlight", "App Store Connect"]
    },
    
    projects: [
      {
        name: "iOS Music App",
        description: "Music streaming and production application with custom audio engine",
        tech: ["SwiftUI", "Core Audio", "AVFoundation"]
      },
      {
        name: "Mobile Game",
        description: "2D puzzle game with online multiplayer functionality",
        tech: ["SpriteKit", "GameKit", "Firebase"]
      },
      {
        name: "Productivity App",
        description: "Task management app with widgets and notifications",
        tech: ["SwiftUI", "WidgetKit", "Core Data"]
      }
    ]
  };

  return (
    <div className="latex-resume">
      <div className="resume-paper">
        {/* Header */}
        <header className="resume-header-section">
          <h1 className="resume-name">{resumeData.personal.name}</h1>
          <div className="resume-subtitle">{resumeData.personal.title}</div>
          <div className="resume-location">
            <MapPin size={14} />
            {resumeData.personal.location}
          </div>
        </header>

        {/* Summary */}
        <section className="resume-section">
          <h2 className="section-header">
            Professional Summary<span className="header-dot">.</span>
          </h2>
          <p className="summary-text">{resumeData.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="section-header">
            <Briefcase size={18} />
            Experience<span className="header-dot">.</span>
          </h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="experience-entry">
              <div className="entry-header">
                <div>
                  <h3 className="entry-title">{exp.title}</h3>
                  <div className="entry-company">{exp.company} • {exp.location}</div>
                </div>
                <div className="entry-period">{exp.period}</div>
              </div>
              <ul className="responsibilities-list">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="section-header">
            <GraduationCap size={18} />
            Education<span className="header-dot">.</span>
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-entry">
              <div className="entry-header">
                <div>
                  <h3 className="entry-title">{edu.degree}</h3>
                  <div className="entry-company">{edu.school} • {edu.location}</div>
                </div>
                <div className="entry-period">{edu.period}</div>
              </div>
              <p className="entry-details">{edu.details}</p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="section-header">
            <Code size={18} />
            Technical Skills<span className="header-dot">.</span>
          </h2>
          <div className="skills-list">
            {Object.entries(resumeData.skills).map(([category, skills], index) => (
              <div key={index} className="skill-row">
                <span className="skill-category">{category}:</span>
                <span className="skill-items">{skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2 className="section-header">
            <Book size={18} />
            Notable Projects<span className="header-dot">.</span>
          </h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="project-entry">
              <h3 className="entry-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                <strong>Technologies:</strong> {project.tech.join(' • ')}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Resume;
