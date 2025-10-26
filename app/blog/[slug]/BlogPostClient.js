'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

export default function BlogPostClient({ post }) {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    if (!prefersReducedMotion && post && headerRef.current && contentRef.current) {
      const tl = gsap.timeline();
      
      tl.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      });

      tl.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      }, '-=0.3');
    }
  }, { scope: containerRef, dependencies: [post] });

  if (!post) {
    return null;
  }

  return (
    <div ref={containerRef} className="bg-slate-50 min-vh-100">
      <article className="container py-5">
        
        {/* Breadcrumb Navigation */}
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="list-unstyled d-flex align-items-center gap-2 mb-0">
                <li>
                  <Link 
                    href="/" 
                    className="text-slate-600 text-sm text-decoration-none blog-breadcrumb-link"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-slate-400 text-sm">/</li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-slate-600 text-sm text-decoration-none blog-breadcrumb-link"
                  >
                    Blog
                  </Link>
                </li>
                <li className="text-slate-400 text-sm">/</li>
                <li className="text-slate-900 text-sm fw-medium">Article</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="row mb-5" ref={headerRef}>
          <div className="col-lg-10 col-xl-8 mx-auto">
            
            {/* Metadata */}
            <div className="d-flex align-items-center gap-4 mb-4">
              <div className="d-flex align-items-center gap-2">
                <Calendar size={14} className="text-slate-400" />
                <time 
                  dateTime={post.date}
                  className="text-sm text-slate-500"
                >
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              <div className="d-flex align-items-center gap-2">
                <User size={14} className="text-slate-400" />
                <span className="text-sm text-slate-500">{post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl text-slate-900 fw-bold mb-0">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Article Content */}
        <div className="row" ref={contentRef}>
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="row mt-5 pt-5">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 pt-4 blog-post-footer">
              <Link 
                href="/blog" 
                className="d-inline-flex align-items-center gap-2 text-slate-600 text-sm fw-medium text-decoration-none blog-back-link"
              >
                <ArrowLeft size={16} />
                <span>Back to all articles</span>
              </Link>
              
              <Link 
                href="/contact" 
                className="btn btn-dark text-sm fw-semibold px-4 py-2 blog-cta-button"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </footer>

      </article>
    </div>
  );
}