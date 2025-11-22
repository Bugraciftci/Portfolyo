import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, Share2, Tag, ArrowLeft } from 'lucide-react'
import './BlogPost.css'

const BlogPost = () => {
  const { id } = useParams()

  const allBlogPosts = {
    'ios-development-journey': {
      title: 'My iOS Development Journey',
      tags: ['iOS', 'SwiftUI', 'Development'],
      date: 'November 20, 2025',
      readTime: '5 min read',
      image: '📱',
      content: `My journey into iOS development started with a simple curiosity about how apps work. What began as a hobby quickly turned into a passion that shapes my career today.

## Getting Started with Swift

Learning Swift was my first step into the Apple ecosystem. The language's clean syntax and powerful features made it an excellent choice for beginners.

## Discovering SwiftUI

When Apple introduced SwiftUI, it revolutionized how I build user interfaces. The declarative approach makes UI code more intuitive.

## Publishing to the App Store

Taking an app from idea to the App Store taught me valuable lessons about user experience, testing, and marketing.

## Current Focus

Today, I'm focused on building apps that combine functionality with great design. My interests span music production apps, productivity tools, and indie games.

## Advice for Beginners

If you're starting your iOS development journey - start with the official Swift documentation, build small projects to practice, and join the developer community.

## Conclusion

iOS development is a rewarding field that combines creativity with technical skills. Whether you're building your first app or your fiftieth, there's always something new to learn and create.`
    }
  }

  const post = allBlogPosts[id]

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="post-not-found">
          <h1>Post Not Found</h1>
          <Link to="/blog" className="back-link">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href
      })
    }
  }

  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <div className="post-header">
          <div className="post-title-row">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="meta-item">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="meta-item">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        <div className="post-content">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.trim().startsWith('##')) {
              return <h2 key={index}>{paragraph.replace('##', '').trim()}</h2>
            }
            
            return <p key={index}>{paragraph}</p>
          })}
        </div>

        <div className="post-footer">
          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="post-tag">
                {tag}
              </span>
            ))}
          </div>

          <button className="share-btn" onClick={handleShare}>
            <Share2 size={16} />
            Share
          </button>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
