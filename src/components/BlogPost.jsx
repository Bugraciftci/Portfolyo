import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, Share2, Tag, ArrowLeft } from 'lucide-react'
import './BlogPost.css'

const BlogPost = () => {
  const { id } = useParams()

  const allBlogPosts = {
    'depresyon-ve-uretkensizlik': {
      title: 'Depresyon ve Üretkensizlik Döngüsünden Çıkmak',
      tags: ['Mental Health', 'Productivity', 'Life'],
      date: 'November 22, 2025',
      readTime: '3 min read',
      image: '🌱',
      content: `Merhaba, bu benim ilk blog yazım. Bu yüzden biraz içten ve samimi bir konuyla başlamak istedim. Hepimizin zaman zaman içine düştüğü depresyon ve üretkensizlik dönemleri oluyor. Bugün, bu döngüden nasıl çıkabileceğimiz üzerine konuşmak istiyorum.

Bazen ne yaparsak yapalım hiçbir şey yolunda gitmiyormuş gibi hissederiz. Zihnimiz dağılır, odaklanamayız ve üretme isteğimiz tamamen kaybolur. Böyle anlarda önce durup nefes almak, sonra da gerçekten nasıl hissettiğimizi fark etmek gerekiyor.

Bir anlığına kafanızı çevirin, nerede olduğunuzu, ne yaptığınızı görün. Kendinizi sıkmayın; kısa bir yürüyüş yapmak, biraz kafa dinlemek yeterli olur. Gerekirse ara verin bir süre, toksik insanlardan uzaklaşın.

Neyse, çok uzatmayacağım: Kısacası sosyal medyayı bırakın.`
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
