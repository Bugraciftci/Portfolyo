import React from 'react';
import { MapPin, Code, Briefcase, GraduationCap, Book } from 'lucide-react';
import './Resume.css';

const Resume = () => {

  const resumeData = {
    personal: {
      name: "Muhammed Buğra Çiftçi",
      title: "Junior iOS Developer",
      location: "Turkey"
    },
    
    summary: "Junior iOS Developer with strong knowledge of Swift, SwiftUI, and UIKit, and hands-on experience in publishing apps to the App Store with thousands of active users. Skilled in MVVM architecture, OOP, and SOLID principles, with a passion for creating intuitive user interfaces and smooth mobile experiences. Experienced in Firebase, analytics, and CI/CD workflows, and eager to contribute to innovative products that reach millions of users.",
    
    experience: [
      {
        title: "iOS Developer Intern",
        company: "United Yazılım",
        period: "Summer 2025",
        location: "Turkey",
        responsibilities: [
          "Contributed to iOS app development using Swift and SwiftUI",
          "Assisted in applying MVVM architecture and Clean Architecture concepts",
          "Developed and tested small features including custom UI components and animations",
          "Gained practical experience with Firebase services (Analytics, Realtime Database)",
          "Collaborated with team members using Git & GitHub and participated in code reviews"
        ]
      }
    ],
    
    education: [
      {
        degree: "Computer Engineering",
        school: "Bahcesehir University",
        period: "2022 - 2026",
        location: "Turkey",
        details: "Bachelor's Degree"
      }
    ],
    
    skills: {
      "Programming": ["Swift", "SwiftUI", "UIKit", "MVVM", "OOP", "SOLID"],
      "Backend & Tools": ["Firebase", "Core ML", "Combine", "Git", "GitHub"],
      "APIs & Frameworks": ["OpenAI API", "Speech Framework", "SiriKit", "SDWebImage"],
      "Analytics & CI/CD": ["Firebase Analytics", "App Store Connect", "TestFlight"]
    },
    
    projects: [
      {
        name: "CS Smokes",
        role: "iOS Developer",
        description: "Created an iOS app that helps Counter-Strike players find and learn smoke spots. Published on the App Store with 10,000+ downloads and 50,000+ weekly impressions.",
        tech: ["SwiftUI", "MVVM", "Firebase", "Firebase Analytics"]
      },
      {
        name: "PicGen",
        role: "iOS Developer",
        description: "Developed an iOS app generating images from text using OpenAI DALL·E API. Integrated Core ML for offline image processing, SDWebImage for caching. Implemented Combine for real-time updates.",
        tech: ["SwiftUI", "OpenAI API", "Core ML", "Combine", "SDWebImage"]
      },
      {
        name: "Chatify",
        role: "Backend Developer",
        description: "Built a chat app with OpenAI GPT-4o API and Firebase Realtime Database. Implemented JWT Authentication for secure login/session management. Added voice interaction using Speech Framework & SiriKit.",
        tech: ["OpenAI GPT-4o", "Firebase", "JWT", "MVC", "Speech Framework", "SiriKit"]
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
            Projects<span className="header-dot">.</span>
          </h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="project-entry">
              <div className="entry-header">
                <h3 className="entry-title">{project.name}</h3>
                <div className="entry-company">{project.role}</div>
              </div>
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
