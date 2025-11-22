import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, Search } from 'lucide-react'
import './Blog.css'

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const blogPosts = [
    {
      id: 'ios-development-journey',
      title: 'My iOS Development Journey',
      excerpt: 'From learning Swift to publishing apps on the App Store - my journey as an iOS developer.',
      tags: ['iOS', 'SwiftUI', 'Development'],
      date: '2025-11-20',
      readTime: '5 min read',
      image: '�'
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

