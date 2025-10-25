'use client'

import { useState, useRef, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  
  const navRef = useRef()
  const logoRef = useRef()
  const linksRef = useRef()
  const ctaRef = useRef()
  const mobileMenuRef = useRef()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/insurance", label: "Insurance" },
    { href: "/team", label: "Team" },
    { href: "/services", label: "Services" },
    { href: "/owners", label: "Owners" },
    { href: "/blog", label: "Blog" }
  ]

  // Detect URL changes and update active link
  useEffect(() => {
    const updateActiveLink = () => {
      setActiveLink(window.location.pathname)
    }

    updateActiveLink()
    window.addEventListener('popstate', updateActiveLink)
    
    return () => window.removeEventListener('popstate', updateActiveLink)
  }, [])

  // Scroll detection for nav state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile menu animation
  useGSAP(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(mobileMenuRef.current, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      )
      gsap.fromTo(mobileMenuRef.current.querySelectorAll('.mobile-link'),
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out", stagger: 0.05, delay: 0.1 }
      )
    }
  }, [isOpen])

  const toggleMobileMenu = () => {
    if (isOpen && mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current.querySelectorAll('.mobile-link'), {
        x: -20,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        stagger: 0.03,
        onComplete: () => setIsOpen(false)
      })
    } else {
      setIsOpen(true)
    }
  }

  const isActiveLink = (href) => {
    return activeLink === href
  }

  return (
    <>
      <nav 
        ref={navRef}
        className="position-fixed w-100 "
        style={{ 
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1050,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
          borderBottom: isScrolled ? '1px solid #e2e8f0' : 'none',
          transition: 'all 0.5s ease-out'
        }}
      >
        <div className="bg-slate-200 text-slate-900 text-sm text-center p-2">
          <p className="mb-0">Dedicated to the Mental Health of Norfolk&apos;s Military Community <Link href="/services" className="underline font-semibold"> Learn More</Link></p>
        </div>
        <div className="container-fluid px-4 px-lg-5">
          <div className="row align-items-center py-3">
            
            {/* Logo Section */}
            <div className="col col-lg-auto" style={{ minWidth: 0 }}>
              <div ref={logoRef}>
                <Link
                  href="/"
                  className="d-inline-flex align-items-center text-decoration-none group"
                  style={{ maxWidth: '100%' }}
                >
                  <div 
                    className="bg-slate-900 text-white px-3 py-2 me-2 transition-all duration-300 flex-shrink-0"
                    style={{ 
                      backgroundColor: '#0f172a',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span className="text-sm fw-bold" style={{ letterSpacing: '-0.025em' }}>TLC</span>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <span className="text-slate-900 fw-semibold d-block lh-1" style={{ fontSize: '1rem', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      The Lemich Clinic
                    </span>
                    <span className="text-slate-600 d-block lh-1 mt-1" style={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      Military Mental Health
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Navigation Links - Center */}
            <div className="col d-none d-lg-flex justify-content-center">
              <div 
                ref={linksRef}
                className="bg-slate-900 rounded-pill px-4 py-2"
                style={{ backgroundColor: '#0f172a' }}
              >
                <ul className="d-flex align-items-center gap-4 mb-0 list-unstyled">
                  {navLinks.map((link) => (
                    <li key={link.href} className="nav-item ">
                      <Link
                        href={link.href}
                        className={`nav-link text-decoration-none px-3 py-2 rounded-pill transition-all duration-300 fw-medium ${
                          isActiveLink(link.href)
                            ? 'text-slate-900 bg-white shadow-sm'
                            : 'text-slate-300'
                        }`}
                        style={{ 
                          fontSize: '0.875rem',
                          color: isActiveLink(link.href) ? '#0f172a' : '#cbd5e1',
                          backgroundColor: isActiveLink(link.href) ? '#ffffff' : 'transparent',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="col-auto d-none d-lg-flex">
              <div ref={ctaRef} className="d-flex align-items-center gap-3">
                
                {/* Contact Button */}
                <div>
                  <Link
                    href="/contact"
                    className="btn text-decoration-none fw-semibold d-inline-flex align-items-center contact-btn"
                    style={{ 
                      border: '1px solid #0f172a',
                      color: '#0f172a',
                      backgroundColor: 'transparent',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span className="me-2">Contact</span>
                    <ArrowRight size={14} style={{ transition: 'transform 0.3s ease' }} />
                  </Link>
                </div>

                {/* Emergency Contact */}
                <div>
                  <a
                    href="tel:1-800-273-8255"
                    className="btn text-white text-decoration-none fw-semibold"
                    style={{ 
                      backgroundColor: '#dc2626',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Crisis Line
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="col-auto d-lg-none">
              <button
                className="btn btn-link p-2 text-decoration-none"
                style={{ color: '#0f172a' }}
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="position-fixed w-100 h-100 d-lg-none" style={{ top: 0, left: 0, zIndex: 1040 }}>
          {/* Backdrop */}
          <div 
            className="position-absolute w-100 h-100"
            style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div 
            ref={mobileMenuRef}
            className="position-absolute bg-white shadow-lg h-100"
            style={{ 
              top: 0, 
              right: 0, 
              width: '280px', 
              paddingTop: '80px',
              boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="px-4">
              
              {/* Mobile Navigation Links */}
              <div className="mb-5 mt-5">
                <ul className="list-unstyled mb-0">
                  {navLinks.map((link) => (
                    <li key={link.href} className="mb-1">
                      <Link
                        href={link.href}
                        className={`mobile-link d-flex align-items-center justify-content-between px-4 py-3 text-decoration-none transition-all duration-300 rounded fw-medium ${
                          isActiveLink(link.href) ? 'active-mobile-link' : ''
                        }`}
                        style={{ 
                          backgroundColor: isActiveLink(link.href) ? '#0f172a' : 'transparent',
                          color: isActiveLink(link.href) ? '#ffffff' : '#0f172a',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{link.label}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile CTA Section */}
              <div className="pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
                <Link
                  href="/contact"
                  className="mobile-link btn text-white w-100 py-3 mb-3 text-decoration-none fw-semibold"
                  style={{ backgroundColor: '#0f172a' }}
                  onClick={() => setIsOpen(false)}
                >
                  Get In Touch
                </Link>
                
                <a
                  href="tel:1-800-273-8255"
                  className="mobile-link btn w-100 py-3 text-decoration-none fw-semibold"
                  style={{ 
                    border: '1px solid #dc2626',
                    color: '#dc2626',
                    backgroundColor: 'transparent'
                  }}
                >
                  Crisis Support: 1-800-273-8255
                </a>
              </div>

              {/* Mobile Footer Info */}
              <div className="mobile-link mt-4 pt-4" style={{ borderTop: '1px solid #e2e8f0' }}>
                <p className="mb-2" style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Confidential military mental health support
                </p>
                <p className="mb-0" style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  Available 24/7 for active duty, veterans, and military families
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div style={{ height: '80px' }} />
    </>
  )
}