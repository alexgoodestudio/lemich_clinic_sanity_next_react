import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity'

export default async function BlogPost({ params }) {
  const { slug } = params
  
  const post = await client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      title,
      slug,
      description,
      publishedAt,
      _updatedAt,
      author,
      content
    }
  `, { slug })

  if (!post) {
    return <div>Post not found</div>
  }

  // Portable Text components for custom styling
  const portableTextComponents = {
    block: {
      h2: ({children}) => <h2 className="text-3xl font-semibold text-slate-900 mb-3 mt-5">{children}</h2>,
      h3: ({children}) => <h3 className="text-xl font-semibold text-slate-900 mb-2 mt-4">{children}</h3>,
      normal: ({children}) => <p className="text-md text-slate-700 mb-4">{children}</p>,
    },
    list: {
      bullet: ({children}) => <ul className="list-disc ms-4 mb-3">{children}</ul>,
      number: ({children}) => <ol className="list-decimal ms-4 mb-3">{children}</ol>,
    },
    listItem: {
      bullet: ({children}) => <li className="text-md text-slate-700 mb-2">{children}</li>,
      number: ({children}) => <li className="text-md text-slate-700 mb-2">{children}</li>,
    },
    marks: {
      strong: ({children}) => <strong className="font-semibold text-slate-900">{children}</strong>,
      em: ({children}) => <em>{children}</em>,
      link: ({children, value}) => (
        <a 
          href={value.href} 
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  }

  return (
    <div className="bg-slate-50 min-vh-100">
      <div className="container py-5">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/blog">Blog</a>
            </li>
            <li className="breadcrumb-item active">Article</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="row mb-5">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="mb-4">
              <time className="text-sm text-slate-500">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="mx-2 text-slate-400">•</span>
              <span className="text-sm text-slate-500">{post.author}</span>
            </div>
            
            <h1 className="text-5xl font-bold text-slate-900 mb-0">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Article Content - NOW PROPERLY RENDERED */}
        <div className="row">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="blog-post-content">
              <PortableText 
                value={post.content} 
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="row mt-5 pt-5">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="d-flex justify-content-between align-items-center pt-4 border-top">
              <a href="/blog" className="text-slate-600 text-decoration-none">
                ← Back to all articles
              </a>
              
              <a href="/contact" className="btn btn-dark">
                Schedule Consultation
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}