import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import './BlogCategory.css'

const BlogCategory = () => {
  const { category } = useParams()

  const allBlogPosts = {
    'game-dev': [
      {
        id: 'game-dev-1',
        title: 'Game Development Fundamentals',
        excerpt: 'Understanding core concepts like game loops, physics, and player mechanics.',
        date: 'Oct 10, 2025',
        readTime: '6 min read',
        image: '🎮'
      },
      {
        id: 'game-dev-2',
        title: 'Creating Engaging Game Mechanics',
        excerpt: 'How to design gameplay that keeps players coming back for more.',
        date: 'Sep 20, 2025',
        readTime: '8 min read',
        image: '🕹️'
      },
      {
        id: 'game-dev-3',
        title: 'Unity vs Unreal: Choosing Your Engine',
        excerpt: 'A comprehensive comparison of the two most popular game engines.',
        date: 'Aug 15, 2025',
        readTime: '7 min read',
        image: '⚙️'
      }
    ],
    'music': [
      {
        id: 'music-1',
        title: 'My Journey into Music Production',
        excerpt: 'From complete beginner to creating my first beats - lessons learned along the way.',
        date: 'Oct 15, 2025',
        readTime: '4 min read',
        image: '🎵'
      },
      {
        id: 'music-2',
        title: 'Sound Design Tips for Beginners',
        excerpt: 'Essential techniques and tools for creating unique sounds in your music productions.',
        date: 'Sep 28, 2025',
        readTime: '5 min read',
        image: '🎧'
      },
      {
        id: 'music-3',
        title: 'Best DAWs for Music Production in 2025',
        excerpt: 'Exploring Logic Pro, Ableton Live, and FL Studio for different workflows.',
        date: 'Aug 10, 2025',
        readTime: '6 min read',
        image: '🎹'
      }
    ],
    'technology': [
      {
        id: 'tech-1',
        title: 'Building Modern iOS Apps with SwiftUI',
        excerpt: 'Learn how SwiftUI revolutionizes iOS development with declarative syntax and powerful features.',
        date: 'Oct 20, 2025',
        readTime: '5 min read',
        image: '📱'
      },
      {
        id: 'tech-2',
        title: 'Mastering Combine Framework',
        excerpt: 'A deep dive into reactive programming with Combine in iOS applications.',
        date: 'Oct 5, 2025',
        readTime: '7 min read',
        image: '⚡'
      },
      {
        id: 'tech-3',
        title: 'The Future of Mobile Development',
        excerpt: 'Exploring emerging trends in iOS and cross-platform mobile development.',
        date: 'Sep 12, 2025',
        readTime: '6 min read',
        image: '🚀'
      }
    ]
  }

  const categoryInfo = {
    'game-dev': {
      title: 'Game',
      emoji: '🎮',
      description: 'I\'ve been playing games since childhood, and now I create them. I develop games using Unity and create 3D models with Blender, exploring game mechanics and the creative process behind interactive experiences.'
    },
    'music': {
      title: 'Music',
      emoji: '🎵',
      description: 'Sharing my journey in music production, sound design techniques, and the tools I use to create audio experiences.'
    },
    'technology': {
      title: 'Technology',
      emoji: '📱',
      description: 'I write about iOS development, SwiftUI, mobile architecture, and best practices in building modern applications.'
    }
  }

  const posts = allBlogPosts[category] || []
  const info = categoryInfo[category] || { title: 'Blog', emoji: '📝', description: '' }
  const categoryTitle = info.title
  const categoryEmoji = info.emoji
  const categoryDescription = info.description

  return (
    <div className="blog-category-page">
      <div className="category-header">
        <div className="container">
          <div className="category-title-section">
            <h1>{categoryTitle}</h1>
            <p className="category-main-description">{categoryDescription}</p>
          </div>
          <div className="category-divider"></div>
        </div>
      </div>

      <div className="category-content">
        <div className="container">
          <div className="blog-posts-grid">
            {posts.map(post => (
              <Link to={`/blog/${category}/${post.id}`} key={post.id} className="blog-post-card">
                <div className="post-card-image">
                  <span className="post-emoji">{post.image}</span>
                </div>
                <div className="post-card-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-card-meta">
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
      </div>
    </div>
  )
}

export default BlogCategory

