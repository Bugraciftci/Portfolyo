import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Send, Github, Linkedin, Twitter, FileText, CheckCircle, Apple } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate form submission (you can replace this with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // You can integrate with email services like:
      // - EmailJS: https://www.emailjs.com/
      // - Formspree: https://formspree.io/
      // - Your own backend API
      
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      alert('Something went wrong. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', url: 'https://x.com/Bugra_ciftci_', external: true },
    { icon: Github, label: 'GitHub', url: 'https://github.com/Bugraciftci', external: true },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammed-bu%C4%9Fra-%C3%A7ift%C3%A7i-07b22b244/', external: true },
    { icon: Apple, label: 'App Store', url: 'https://apps.apple.com/tr/developer/muhammed-bugra-ciftci/id1726010593', external: true },
    { icon: Mail, label: 'Email', url: 'mailto:bugraciftci7@gmail.com', external: false },
    { icon: FileText, label: 'Resume', url: '/resume', external: false, internal: true }
  ]

  return (
    <div className="retro-contact">
      <div className="container">
        {/* Header */}
        <div className="retro-contact-header">
          <h1 className="contact-title">
            Contact<span className="title-dot">.</span>
          </h1>
        </div>

        {/* Social Links - Simple List */}
        <div className="contact-links-section">
          <h2 className="section-heading">Get in touch</h2>
          <div className="social-links-list">
            {socialLinks.map((link, index) => {
              if (link.internal) {
                return (
                  <Link
                    key={index}
                    to={link.url}
                    className="social-link-item"
                  >
                    <link.icon size={20} />
                    <span>{link.label}</span>
                  </Link>
                )
              }
              return (
                <a
                  key={index}
                  href={link.url}
                  className="social-link-item"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2 className="section-heading">Send a message</h2>
          <form className="retro-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
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

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                required
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="success-message">
                <CheckCircle size={20} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            <button 
              type="submit" 
              className="retro-submit-btn"
              disabled={isSubmitting}
            >
              <Send size={18} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
