import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import './BlogPost.css'

const BlogPost = () => {
  const { id } = useParams()

  // In a real app, you'd fetch this data based on the id
  const post = {
    id: 1,
    title: 'Building Modern iOS Apps with SwiftUI',
    category: 'iOS Development',
    date: 'October 20, 2025',
    readTime: '5 min read',
    image: '📱',
    content: `
      SwiftUI has revolutionized the way we build iOS applications. As someone who has worked with UIKit for years, 
      the transition to SwiftUI has been both challenging and incredibly rewarding.

      ## Why SwiftUI?

      SwiftUI introduces a declarative syntax that makes it easier to build and maintain user interfaces. Instead of 
      imperatively describing how to build your UI, you simply declare what you want, and SwiftUI handles the rest.

      ## Key Benefits

      1. **Declarative Syntax**: Write less code and make it more readable
      2. **Live Preview**: See your changes in real-time without rebuilding
      3. **Cross-Platform**: Share code across iOS, macOS, watchOS, and tvOS
      4. **Modern Architecture**: Built-in support for MVVM and reactive programming

      ## Getting Started

      Here's a simple example of a SwiftUI view:

      \`\`\`swift
      struct ContentView: View {
          @State private var count = 0
          
          var body: some View {
              VStack {
                  Text("Count: \\(count)")
                      .font(.largeTitle)
                  
                  Button("Increment") {
                      count += 1
                  }
              }
              .padding()
          }
      }
      \`\`\`

      ## State Management

      One of the most powerful features of SwiftUI is its built-in state management. Properties like @State, 
      @Binding, @ObservedObject, and @StateObject make it easy to manage data flow in your app.

      ## Animations

      SwiftUI makes animations incredibly simple. You can animate almost any change with just a single modifier:

      \`\`\`swift
      withAnimation {
          // Make changes
      }
      \`\`\`

      ## Conclusion

      SwiftUI is the future of iOS development. While it may take time to learn and there are still some edge 
      cases where UIKit is necessary, the productivity gains and code quality improvements make it worth the investment.

      If you're an iOS developer who hasn't tried SwiftUI yet, I highly recommend starting today. The ecosystem 
      is mature enough for production apps, and the community support is excellent.
    `
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="post-header-content">
            <span className="post-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta-header">
              <div className="meta-item">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="meta-item">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-post-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="post-emoji-hero">{post.image}</div>
            
            <article className="post-article">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('##')) {
                  return <h2 key={index}>{paragraph.replace('##', '').trim()}</h2>
                } else if (paragraph.trim().startsWith('```')) {
                  const code = paragraph.replace(/```\w*/g, '').trim()
                  return (
                    <pre key={index}>
                      <code>{code}</code>
                    </pre>
                  )
                } else if (paragraph.trim().match(/^\d+\./)) {
                  const items = paragraph.split('\n').filter(line => line.trim())
                  return (
                    <ol key={index}>
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^\d+\./, '').trim()}</li>
                      ))}
                    </ol>
                  )
                } else if (paragraph.trim()) {
                  return <p key={index}>{paragraph.trim()}</p>
                }
                return null
              })}
            </article>

            <div className="post-footer">
              <button className="btn btn-secondary share-btn">
                <Share2 size={18} />
                <span>Share this post</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost

