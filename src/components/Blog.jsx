import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 'tech-1',
      title: 'Building Modern iOS Apps with SwiftUI',
      excerpt: 'Learn how SwiftUI revolutionizes iOS development with declarative syntax and powerful features.',
      category: 'iOS Development',
      categorySlug: 'technology',
      date: 'Oct 20, 2025',
      readTime: '5 min read',
      image: '📱',
      color: 'blue'
    },
    {
      id: 'music-1',
      title: 'My Journey into Music Production',
      excerpt: 'From complete beginner to creating my first beats - lessons learned along the way.',
      category: 'Music',
      categorySlug: 'music',
      date: 'Oct 15, 2025',
      readTime: '4 min read',
      image: '🎵',
      color: 'purple'
    },
    {
      id: 'game-dev-1',
      title: 'Game Development Fundamentals',
      excerpt: 'Understanding core concepts like game loops, physics, and player mechanics.',
      category: 'Game Dev',
      categorySlug: 'game-dev',
      date: 'Oct 10, 2025',
      readTime: '6 min read',
      image: '🎮',
      color: 'orange'
    },
    {
      id: 'tech-2',
      title: 'Mastering Combine Framework',
      excerpt: 'A deep dive into reactive programming with Combine in iOS applications.',
      category: 'iOS Development',
      categorySlug: 'technology',
      date: 'Oct 5, 2025',
      readTime: '7 min read',
      image: '⚡',
      color: 'blue'
    },
    {
      id: 'music-2',
      title: 'Sound Design Tips for Beginners',
      excerpt: 'Essential techniques and tools for creating unique sounds in your music productions.',
      category: 'Music',
      categorySlug: 'music',
      date: 'Sep 28, 2025',
      readTime: '5 min read',
      image: '🎧',
      color: 'purple'
    },
    {
      id: 'game-dev-2',
      title: 'Creating Engaging Game Mechanics',
      excerpt: 'How to design gameplay that keeps players coming back for more.',
      category: 'Game Dev',
      categorySlug: 'game-dev',
      date: 'Sep 20, 2025',
      readTime: '8 min read',
      image: '🕹️',
      color: 'orange'
    }
  ]

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <p className="blog-subtitle">
          Sharing my thoughts on iOS development, music production, and game design
        </p>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <Link to={`/blog/${post.categorySlug}/${post.id}`} key={post.id} className={`blog-card blog-${post.color}`}>
              <div className="blog-image">
                <span className="blog-emoji">{post.image}</span>
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
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
    </section>
  )
}

export default Blog

