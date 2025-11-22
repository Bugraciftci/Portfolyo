import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, Search } from 'lucide-react'
import './Blog.css'

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const blogPosts = [
    {
      id: 'tech-1',
      title: 'Building Modern iOS Apps with SwiftUI',
      excerpt: 'Learn how SwiftUI revolutionizes iOS development with declarative syntax and powerful features.',
      tags: ['iOS', 'SwiftUI', 'Mobile Development'],
      date: '2025-10-20',
      readTime: '5 min read',
      image: '📱'
    },
    {
      id: 'music-1',
      title: 'My Journey into Music Production',
      excerpt: 'From complete beginner to creating my first beats - lessons learned along the way.',
      tags: ['Music Production', 'DAW', 'Sound Design'],
      date: '2025-10-15',
      readTime: '4 min read',
      image: '🎵'
    },
    {
      id: 'game-dev-1',
      title: 'Game Development Fundamentals',
      excerpt: 'Understanding core concepts like game loops, physics, and player mechanics.',
      tags: ['Game Development', 'Unity', 'Programming'],
      date: '2025-10-10',
      readTime: '6 min read',
      image: '🎮'
    },
    {
      id: 'tech-2',
      title: 'Mastering Combine Framework',
      excerpt: 'A deep dive into reactive programming with Combine in iOS applications.',
      tags: ['iOS', 'Combine', 'Reactive Programming'],
      date: '2025-10-05',
      readTime: '7 min read',
      image: '⚡'
    },
    {
      id: 'music-2',
      title: 'Sound Design Tips for Beginners',
      excerpt: 'Essential techniques and tools for creating unique sounds in your music productions.',
      tags: ['Sound Design', 'Music Production', 'Synthesis'],
      date: '2025-09-28',
      readTime: '5 min read',
      image: '🎧'
    },
    {
      id: 'game-dev-2',
      title: 'Creating Engaging Game Mechanics',
      excerpt: 'How to design gameplay that keeps players coming back for more.',
      tags: ['Game Design', 'Game Development', 'UX'],
      date: '2025-09-20',
      readTime: '8 min read',
      image: '🕹️'
    }
  ]

  // Sadece blog yazısı olan tag'leri topla
  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))]

  // Tag ve arama ile filtreleme
  const filteredPosts = blogPosts.filter(post => {
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  // Tarihi formatla
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
  }

  return (
    <section className="retro-blog" id="blog">
      <div className="container">
        <div className="retro-header">
          <h1 className="retro-title">
            Posts<span className="title-dot">.</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="retro-search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="retro-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tag Filter - Simple Pills */}
        <div className="retro-tags">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`retro-tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag === 'all' ? 'ALL' : tag.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Blog List - List Style */}
        <div className="retro-blog-list">
          {filteredPosts.map((post, index) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="retro-post-item"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="post-date">
                {formatDate(post.date)}
              </div>
              <div className="post-content-wrapper">
                <div className="post-header">
                  <span className="post-hash">#</span>
                  <h3 className="post-title-text">
                    {post.title}
                  </h3>
                </div>
                <div className="post-meta-line">
                  <span className="post-emoji">{post.image}</span>
                  <div className="post-tags-inline">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="inline-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="post-footer-line">
                  <span className="post-read-time">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-results">
            <p>No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog

