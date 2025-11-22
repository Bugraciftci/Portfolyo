import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, Share2, Tag, ArrowLeft } from 'lucide-react'
import './BlogPost.css'

const BlogPost = () => {
  const { id } = useParams()

  const allBlogPosts = {
    'game-dev-1': {
      title: 'Game Development Fundamentals',
      tags: ['Game Development', 'Unity', 'Programming'],
      date: 'October 10, 2025',
      readTime: '6 min read',
      image: '🎮',
      content: `
        Game development is an art form that combines creativity, technical skills, and storytelling. Whether you're building your first indie game or working on a AAA title, understanding the fundamentals is crucial for success.

        ## Core Concepts

        Every game, regardless of genre or platform, relies on several fundamental concepts:

        1. **Game Loop**: The continuous cycle of updating game state, rendering, and handling input
        2. **Physics Systems**: How objects interact with each other and the environment
        3. **Player Mechanics**: The core actions and abilities available to the player
        4. **Level Design**: Creating engaging and challenging environments

        ## Game Loop Deep Dive

        The game loop is the heartbeat of any game. It typically follows this pattern:

        \`\`\`csharp
        while (gameIsRunning) {
            ProcessInput();
            UpdateGameState();
            RenderFrame();
        }
        \`\`\`

        ## Physics and Collision Detection.

        Modern game engines like Unity and Unreal provide robust physics systems, but understanding the underlying concepts helps you make better design decisions.

        ## Conclusion

        Mastering these fundamentals will give you a solid foundation for any game development project. Start small, experiment often, and don't be afraid to fail - every mistake is a learning opportunity.
      `
    },
    'game-dev-2': {
      title: 'Creating Engaging Game Mechanics',
      tags: ['Game Design', 'Game Development', 'UX'],
      date: 'September 20, 2025',
      readTime: '8 min read',
      image: '🕹️',
      content: `
        What makes a game truly engaging? It's not just about beautiful graphics or complex systems - it's about creating mechanics that feel satisfying and keep players coming back for more.

        ## The Psychology of Engagement

        Understanding player psychology is key to designing compelling mechanics. Players are motivated by:

        1. **Achievement**: The satisfaction of completing challenges
        2. **Progression**: Feeling like they're improving and growing
        3. **Discovery**: Uncovering new content and secrets
        4. **Social Connection**: Sharing experiences with others

        ## Core vs. Meta Mechanics

        Core mechanics are the fundamental actions players perform, while meta mechanics are the systems that support and enhance the core experience.

        ## Feedback Loops

        Positive feedback loops keep players engaged by rewarding their actions with meaningful progression. However, balance is crucial - too much reward can make the game feel trivial.

        ## Examples of Great Mechanics

        Some games that excel at mechanical design include:
        - **Celeste**: Perfect platforming with tight controls
        - **Hades**: Roguelike progression that always feels rewarding
        - **Stardew Valley**: Relaxing gameplay with meaningful choices

        ## Conclusion

        Great game mechanics are invisible - players shouldn't think about them, they should just feel good to use. Focus on creating systems that are intuitive, responsive, and rewarding.
      `
    },
    'game-dev-3': {
      title: 'Unity vs Unreal: Choosing Your Engine',
      tags: ['Game Development', 'Unity', 'Unreal Engine'],
      date: 'August 15, 2025',
      readTime: '7 min read',
      image: '⚙️',
      content: `
        Choosing the right game engine is one of the most important decisions you'll make as a game developer. Unity and Unreal Engine are the two most popular options, each with their own strengths and weaknesses.

        ## Unity: The Versatile Choice

        Unity excels in several areas:

        1. **Cross-Platform Support**: Deploy to over 25 platforms
        2. **Beginner Friendly**: Easier learning curve for new developers
        3. **Asset Store**: Huge marketplace of ready-made assets
        4. **2D Development**: Excellent tools for 2D games
        5. **Mobile Focus**: Optimized for mobile game development

        ## Unreal Engine: The Powerhouse

        Unreal Engine is known for:

        1. **Visual Quality**: Industry-leading graphics capabilities
        2. **Blueprint System**: Visual scripting for non-programmers
        3. **AAA Games**: Used by major studios worldwide
        4. **Free to Use**: No upfront costs, revenue sharing model
        5. **C++ Performance**: Native C++ for maximum performance

        ## Making Your Choice

        Consider these factors when choosing:

        - **Team Size**: Unity is great for small teams, Unreal for larger projects
        - **Target Platforms**: Unity for mobile/web, Unreal for console/PC
        - **Art Style**: Unity for stylized games, Unreal for realistic graphics
        - **Budget**: Both have different pricing models

        ## Conclusion

        Both engines are excellent choices. Start with Unity if you're new to game development, or choose Unreal if you're targeting high-end graphics and have a larger team. Remember, the engine is just a tool - great games can be made with either.
      `
    },
    'music-1': {
      title: 'My Journey into Music Production',
      tags: ['Music Production', 'DAW', 'Sound Design'],
      date: 'October 15, 2025',
      readTime: '4 min read',
      image: '🎵',
      content: `
        Three years ago, I had never touched a DAW or knew what MIDI meant. Today, I'm creating original tracks and sharing them with the world. Here's how I got started and what I learned along the way.

        ## The Beginning

        My journey started with a simple question: "How do people make music on computers?" I was fascinated by electronic music but had no idea how it was created.

        ## First Steps

        I began with free software like Audacity and LMMS, learning the basics of:
        - Digital audio workstations (DAWs)
        - MIDI programming
        - Basic mixing concepts
        - Sound design fundamentals

        ## The Learning Curve

        The first few months were overwhelming. There's so much to learn:
        - Music theory basics
        - Software interfaces
        - Audio processing
        - Arrangement techniques

        ## Key Breakthroughs

        Several moments changed everything:
        1. **Understanding EQ**: Finally hearing the difference
        2. **Learning Chord Progressions**: Music started making sense
        3. **First Complete Track**: The satisfaction of finishing something
        4. **Getting Feedback**: Learning from other producers

        ## Tools That Helped

        - **YouTube Tutorials**: Endless free education
        - **Online Communities**: Reddit, Discord servers
        - **Practice**: Daily sessions, even just 30 minutes
        - **Reference Tracks**: Analyzing professional music

        ## Where I Am Now

        I'm still learning every day, but I've found my sound and built a small following. The key was persistence and not being afraid to make terrible music at first.

        ## Advice for Beginners

        Start today, start simple, and don't worry about perfection. Every producer started exactly where you are now.
      `
    },
    'music-2': {
      title: 'Sound Design Tips for Beginners',
      tags: ['Sound Design', 'Music Production', 'Synthesis'],
      date: 'September 28, 2025',
      readTime: '5 min read',
      image: '🎧',
      content: `
        Sound design is the art of creating unique sounds from scratch. It's what separates amateur productions from professional ones. Here are the essential techniques every producer should know.

        ## Understanding Synthesis

        Most electronic sounds are created using synthesizers. The basic components are:

        1. **Oscillators**: Generate the raw waveforms
        2. **Filters**: Shape the frequency content
        3. **Envelopes**: Control how sounds change over time
        4. **Effects**: Add character and depth

        ## Essential Techniques

        ### Layering
        Combine multiple sounds to create something new:
        - Layer different waveforms
        - Mix synthetic and organic sounds
        - Use different octaves for depth

        ### Modulation
        Make sounds move and evolve:
        - Use LFOs for rhythmic movement
        - Apply envelope modulation
        - Experiment with automation

        ### Effects Processing
        Transform basic sounds:
        - Reverb for space and depth
        - Delay for rhythm and texture
        - Distortion for character
        - EQ for clarity

        ## Practical Tips

        1. **Start Simple**: Master basic synthesis before complex techniques
        2. **Use Reference**: Compare your sounds to professional tracks
        3. **Experiment**: Don't be afraid to try weird combinations
        4. **Save Presets**: Build your own sound library
        5. **Learn Your Tools**: Deep knowledge beats having many plugins

        ## Common Mistakes

        - Over-processing sounds
        - Not understanding frequency ranges
        - Ignoring the mix context
        - Using too many effects

        ## Conclusion

        Great sound design comes from understanding the fundamentals and lots of practice. Start with simple sounds and gradually build complexity. Remember, sometimes the simplest sounds are the most effective.
      `
    },
    'music-3': {
      title: 'Best DAWs for Music Production in 2025',
      tags: ['Music Production', 'DAW', 'Software'],
      date: 'August 10, 2025',
      readTime: '6 min read',
      image: '🎹',
      content: `
        Choosing the right Digital Audio Workstation (DAW) is crucial for your music production workflow. Here's a comprehensive comparison of the most popular options available today.

        ## Logic Pro (Mac Only)

        Apple's flagship DAW is perfect for Mac users:

        **Pros:**
        - Incredible built-in instruments and effects
        - Excellent MIDI editing capabilities
        - Great for electronic and hip-hop production
        - One-time purchase, no subscription
        - Professional mixing and mastering tools

        **Cons:**
        - Mac only
        - Can be overwhelming for beginners
        - Limited third-party plugin support compared to others

        ## Ableton Live

        The go-to choice for electronic music producers:

        **Pros:**
        - Unique Session View for live performance
        - Excellent for loop-based music
        - Great built-in instruments (especially Operator)
        - Strong community and tutorials
        - Works well for both studio and live use

        **Cons:**
        - Expensive
        - Steep learning curve
        - Not ideal for traditional songwriting

        ## FL Studio

        Popular among hip-hop and electronic producers:

        **Pros:**
        - Lifetime free updates
        - Great for beat making
        - Intuitive piano roll
        - Strong built-in synthesizers
        - Affordable entry-level version

        **Cons:**
        - Windows-focused (limited Mac support)
        - Can feel cluttered
        - Not ideal for live recording

        ## Pro Tools

        The industry standard for professional studios:

        **Pros:**
        - Industry standard
        - Excellent for recording and mixing
        - Professional-grade audio editing
        - Used in major studios worldwide

        **Cons:**
        - Expensive
        - Complex interface
        - Not ideal for electronic music production
        - Requires powerful hardware

        ## Making Your Choice

        Consider these factors:
        - **Music Style**: Electronic music favors Ableton/FL Studio
        - **Budget**: FL Studio offers great value
        - **Platform**: Logic Pro requires Mac
        - **Workflow**: Try demos before committing

        ## Conclusion

        The best DAW is the one that fits your workflow and budget. Most professional results can be achieved with any of these options - focus on learning your chosen DAW deeply rather than constantly switching.
      `
    },
    'tech-1': {
    title: 'Building Modern iOS Apps with SwiftUI',
      tags: ['iOS', 'SwiftUI', 'Mobile Development'],
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
    },
    'tech-2': {
      title: 'Mastering Combine Framework',
      tags: ['iOS', 'Combine', 'Reactive Programming'],
      date: 'October 5, 2025',
      readTime: '7 min read',
      image: '⚡',
      content: `
        Combine is Apple's reactive programming framework that brings powerful asynchronous programming capabilities to iOS development. It's essential for modern iOS apps that need to handle complex data flows.

        ## What is Combine?

        Combine is a declarative Swift API for processing values over time. It allows you to:
        - Handle asynchronous events
        - Chain operations together
        - Manage complex data flows
        - Create reactive user interfaces

        ## Core Concepts

        ### Publishers
        Publishers emit values over time. They can be:
        - **Just**: Emits a single value
        - **Future**: Emits a value after completion
        - **PassthroughSubject**: Manual value emission
        - **CurrentValueSubject**: Holds and emits current value

        ### Subscribers
        Subscribers receive values from publishers:
        - **Sink**: Simple value handling
        - **Assign**: Assigns values to properties
        - **Custom subscribers**: For complex scenarios

        ### Operators
        Operators transform, filter, and combine publishers:
        - **map**: Transform values
        - **filter**: Filter values based on conditions
        - **merge**: Combine multiple publishers
        - **combineLatest**: Combine latest values

        ## Practical Examples

        ### Network Requests
        \`\`\`swift
        URLSession.shared.dataTaskPublisher(for: url)
            .map(\.data)
            .decode(type: User.self, decoder: JSONDecoder())
            .sink(receiveCompletion: { _ in },
                  receiveValue: { user in
                // Handle user data
            })
        \`\`\`

        ### User Input Handling
        \`\`\`swift
        searchTextField.textPublisher
            .debounce(for: .milliseconds(300), scheduler: RunLoop.main)
            .removeDuplicates()
            .sink { searchText in
                // Perform search
            }
        \`\`\`

        ## Best Practices

        1. **Memory Management**: Use weak references in closures
        2. **Error Handling**: Always handle completion cases
        3. **Threading**: Use appropriate schedulers
        4. **Cancellation**: Store cancellables to prevent memory leaks

        ## Common Pitfalls

        - Forgetting to store cancellables
        - Not handling errors properly
        - Using wrong schedulers
        - Creating retain cycles

        ## Conclusion

        Combine is powerful but has a steep learning curve. Start with simple examples and gradually build complexity. Once mastered, it will transform how you handle asynchronous operations in your iOS apps.
      `
    },
    'tech-3': {
      title: 'The Future of Mobile Development',
      tags: ['Mobile Development', 'Flutter', 'React Native'],
      date: 'September 12, 2025',
      readTime: '6 min read',
      image: '🚀',
      content: `
        The mobile development landscape is evolving rapidly. From new frameworks to emerging platforms, here's what the future holds for mobile developers.

        ## Cross-Platform Evolution

        The gap between native and cross-platform development is narrowing:

        ### Flutter
        Google's UI toolkit is gaining momentum:
        - Single codebase for multiple platforms
        - Excellent performance
        - Growing ecosystem
        - Strong community support

        ### React Native
        Facebook's framework continues to evolve:
        - JavaScript/TypeScript development
        - Large community
        - Many third-party libraries
        - Good for web developers

        ### Kotlin Multiplatform
        JetBrains' solution for sharing business logic:
        - Native UI on each platform
        - Shared business logic
        - Growing adoption
        - Kotlin-first approach

        ## Emerging Technologies

        ### Augmented Reality (AR)
        AR is becoming mainstream:
        - ARKit and ARCore improvements
        - Web-based AR solutions
        - New interaction paradigms
        - Business applications growing

        ### Machine Learning
        On-device ML is expanding:
        - Core ML and TensorFlow Lite
        - Privacy-focused AI
        - Real-time processing
        - Custom model deployment

        ### 5G and Edge Computing
        New connectivity enables:
        - Lower latency applications
        - Real-time collaboration
        - Enhanced streaming experiences
        - IoT integration

        ## Development Trends

        ### Declarative UI
        The shift continues:
        - SwiftUI adoption growing
        - Jetpack Compose maturing
        - Flutter's declarative approach
        - Better developer experience

        ### Server-Driven UI
        Dynamic app updates:
        - Faster feature delivery
        - A/B testing capabilities
        - Reduced app store dependencies
        - Better user experience

        ## Skills for the Future

        To stay relevant, developers should focus on:

        1. **Cross-Platform Development**: Learn multiple frameworks
        2. **AI/ML Integration**: Understand on-device ML
        3. **Performance Optimization**: Essential for complex apps
        4. **Security**: Privacy and data protection
        5. **Accessibility**: Inclusive design practices

        ## Conclusion

        The future of mobile development is exciting and challenging. Success will come to developers who embrace change, learn continuously, and focus on creating exceptional user experiences. The tools and platforms may evolve, but the fundamentals of good software development remain constant.
      `
    }
  }

  const post = allBlogPosts[id] || {
    title: 'Post Not Found',
    category: 'Error',
    date: 'Unknown',
    readTime: '0 min read',
    image: '❓',
    content: 'The requested blog post could not be found.'
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-header">
        <div className="container">
          <div className="post-header-content">
            <Link to="/blog" className="back-to-blog">
              <ArrowLeft size={18} />
              <span>Back to Blog</span>
            </Link>
            <h1>{post.title}</h1>
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="post-tag">
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
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

