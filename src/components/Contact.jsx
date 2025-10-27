import React, { useState } from 'react'
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this data to a backend
    console.log('Form submitted:', formData)
    alert('Thanks for reaching out! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="contact-page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="contact-page-subtitle">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={32} />
                </div>
                <h3>Email Me</h3>
                <p>Feel free to reach out anytime</p>
                <a href="mailto:your.email@example.com" className="info-link">
                  your.email@example.com
                </a>
              </div>

              <div className="contact-social">
                <h3>Connect With Me</h3>
                <div className="social-grid">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-card">
                    <Github size={28} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-card">
                    <Linkedin size={28} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-card">
                    <Twitter size={28} />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
