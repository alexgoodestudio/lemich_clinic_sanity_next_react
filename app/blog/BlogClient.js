'use client';
import Nav from '../../components/Nav';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

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
      <Nav/>
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
            <h1 className="text-5xl  text-slate-900  fw-bold mb-3">
              The Lemich Clinic
            </h1>
            <p className="text-lg text-slate-600 mb-0">
              Expert guidance on military mental health, VA benefits, and therapy for service members and veterans.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="row g-4">
          {blogPosts && blogPosts.length > 0 ? (
            blogPosts.map((post, index) => {
              // Use date if available, otherwise fall back to _createdAt
              const displayDate = post.date || post._createdAt;
              
              return (
                <div
                  key={post._id}
                  className="col-12"
                  ref={el => postsRef.current[index] = el}
                >
                  <article className="bg-white rounded overflow-hidden blog-post-card">
                    <div className="row g-0">

                      {/* Featured Image */}
                      {post.featuredImage && (
                        <div className="col-lg-4">
                          <div className="position-relative" style={{ height: '300px' }}>
                            <Image
                              src={urlFor(post.featuredImage).width(600).height(400).url()}
                              alt={post.featuredImage.alt || post.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                          </div>
                        </div>
                      )}

                      {/* Content Side */}
                      <div className={post.featuredImage ? "col-lg-8 p-5" : "col-lg-12 p-5"}>

                        {/* Metadata */}
                        <div className="d-flex align-items-center gap-4 mb-3">
                          <div className="d-flex align-items-center gap-2">
                            <Calendar size={14} className="text-slate-400" />
                            <time 
                              dateTime={displayDate}
                              className="text-sm text-slate-500"
                            >
                              {displayDate ? new Date(displayDate).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              }) : 'Date not available'}
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
              );
            })
          ) : (
            <div className="col-12">
              <div className="bg-white rounded p-5 text-center">
                <p className="text-slate-600 mb-0">No blog posts available yet.</p>
              </div>
            </div>
          )}
        </div>

      </div>
      <Banner/>
      <Footer/>
    </div>
  );
}