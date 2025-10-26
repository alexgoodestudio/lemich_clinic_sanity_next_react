'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';

const MOTION = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.5,
  slow: 0.8,
  story: 1.2
};

export default function BlogClient({ blogPosts }) {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const postsRef = useRef([]);
  
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    if (!prefersReducedMotion && headerRef.current) {
      const tl = gsap.timeline();
      
      tl.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: MOTION.smooth,
        ease: 'power2.out'
      });

      if (postsRef.current.length > 0) {
        tl.from(postsRef.current.filter(Boolean), {
          y: 30,
          opacity: 0,
          duration: MOTION.smooth,
          ease: 'power2.out',
          stagger: 0.1
        }, '-=0.3');
      }
    }
  }, { scope: containerRef, dependencies: [blogPosts] });

  return (
    <div ref={containerRef} className="bg-slate-50 min-vh-100">
      <div className="container py-5">
        
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
                <li className="text-slate-900 text-sm fw-medium">Blog</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Header Section */}
        <div className="row mb-5 pb-4" ref={headerRef}>
          <div className="col-lg-8">
            <h1 className="text-6xl text-slate-900 fw-bold mb-3">
              Resources & Insights
            </h1>
            <p className="text-lg text-slate-600 mb-0">
              Expert guidance on military mental health, VA benefits, and therapy for service members and veterans.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="row g-4">
          {blogPosts && blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <div 
                key={post._id} 
                className="col-12"
                ref={el => postsRef.current[index] = el}
              >
                <article className="bg-white rounded overflow-hidden blog-post-card">
                  <div className="row g-0">
                    
                    {/* Content Side */}
                    <div className="col-lg-12 p-5">
                      
                      {/* Metadata */}
                      <div className="d-flex align-items-center gap-4 mb-3">
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
                      <h2 className="text-3xl text-slate-900 fw-semibold mb-3">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-decoration-none text-slate-900 blog-title-link"
                        >
                          {post.title}
                        </Link>
                      </h2>

                      {/* Description */}
                      <p className="text-md text-slate-600 mb-4">
                        {post.description}
                      </p>

                      {/* Read More Link */}
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="d-inline-flex align-items-center gap-2 text-slate-900 text-sm fw-semibold text-decoration-none blog-read-more"
                      >
                        <span>Read Article</span>
                        <ArrowRight size={16} className="blog-arrow" />
                      </Link>

                    </div>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="bg-white rounded p-5 text-center">
                <p className="text-slate-600 mb-0">No blog posts available yet.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}