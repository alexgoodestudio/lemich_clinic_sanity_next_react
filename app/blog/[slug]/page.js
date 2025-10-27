import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import Link from 'next/link'

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function BlogPost({ params }) {
  const { slug } = params
  
  // Fixed: Using 'date' instead of 'publishedAt' to match your schema
  const post = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      title,
      slug,
      description,
      date,
      _createdAt,
      _updatedAt,
      author,
      content
    }`,
    { slug },
    {
      cache: 'no-store',  // ← Added this
    }
  )

  if (!post) {
    return (
      <div className="bg-slate-50 min-vh-100">
        <Nav />
        <div className="container py-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
            <Link href="/blog" className="btn btn-dark">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Use date if available, fall back to _createdAt
  const displayDate = post.date || post._createdAt

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
      <Nav />
      <div className="container py-5">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="list-unstyled d-flex align-items-center gap-2 mb-0">
            <li>
              <Link href="/" className="text-slate-600 text-sm text-decoration-none">
                Home
              </Link>
            </li>
            <li className="text-slate-400 text-sm">/</li>
            <li>
              <Link href="/blog" className="text-slate-600 text-sm text-decoration-none">
                Blog
              </Link>
            </li>
            <li className="text-slate-400 text-sm">/</li>
            <li className="text-slate-900 text-sm fw-medium">Article</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="row mb-5">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="mb-4">
              <time className="text-sm text-slate-500" dateTime={displayDate}>
                {displayDate ? new Date(displayDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : 'Date not available'}
              </time>
              <span className="mx-2 text-slate-400">•</span>
              <span className="text-sm text-slate-500">{post.author}</span>
            </div>
            
            <h1 className="text-5xl font-bold text-slate-900 mb-0">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Article Content */}
        <div className="row">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="blog-post-content">
              {post.content ? (
                <PortableText 
                  value={post.content} 
                  components={portableTextComponents}
                />
              ) : (
                <p className="text-slate-600">No content available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="row mt-5 pt-5">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 pt-4 border-top">
              <Link 
                href="/blog" 
                className="text-slate-600 text-decoration-none d-inline-flex align-items-center gap-2"
              >
                <span>←</span>
                <span>Back to all articles</span>
              </Link>
              
              <Link 
                href="/contact" 
                className="btn btn-dark"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <Banner />
      <Footer />
    </div>
  )
}