'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const footerModules = {
    brand: {
      title: "The Lemich Clinic",
      subtitle: "Military Mental Health",
      description: "Specialized mental health care for military families and veterans in Norfolk, Virginia.",
      location: "Norfolk, VA"
    },
    services: {
      title: "Services",
      links: [
        { label: "Clinical Services", href: "/services" },
        { label: "Insurance Coverage", href: "/insurance" },
        { label: "Schedule Appointment", href: "/contact" }
      ]
    },
    about: {
      title: "About",
      links: [
        { label: "Our Team", href: "/team" },
        { label: "Clinic Owners", href: "/owners" },
        { label: "Psychology Today", href: "https://www.psychologytoday.com/us/therapists/the-lemich-clinic-for-military-mental-health-norfolk-va/755325", external: true },
        { label: "Facebook", href: "https://www.facebook.com/p/The-Lemich-Clinic-For-Military-Mental-Health-100086257112340/", external: true }
      ]
    },
    contact: {
      title: "Connect",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "(757) 536-1233", href: "tel:17575361233" },
        { label: "info@lemichclinic.org", href: "mailto:info@lemichclinic.org" }
      ]
    }
  }

  const LinkItem = ({ item, delay = 0 }) => (
    <Link
      href={item.href}
      className={`footer-link block transition-all duration-300 ease-out transform hover:translate-x-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`
      }}
      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {item.label}
    </Link>
  )

  const FooterModule = ({ title, delay = 0, children }) => (
    <div className={`footer-module transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${delay}ms` }}>
      <h4 className="footer-heading">{title}</h4>
      <div className="footer-content">
        {children}
      </div>
    </div>
  )

  return (
    <>
      <style jsx>{`
        .footer-container {
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          border-top: 1px solid #e2e8f0;
          position: relative;
        }
        
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 4vw, 2rem) clamp(2rem, 4vw, 3rem);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
        }
        
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            gap: clamp(2rem, 4vw, 4rem);
          }
        }
        
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #1e293b;
          margin-bottom: clamp(1rem, 2vw, 1.5rem);
          line-height: 1.3;
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          font-size: 0.9375rem;
          font-weight: 400;
          color: #64748b;
          text-decoration: none;
          line-height: 1.5;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          color: #334155;
        }
        
        .footer-link:hover::before {
          transform: scaleX(1);
        }
        
        .footer-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #3b82f6;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        
        .brand-title {
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #1e293b;
          line-height: 1.3;
          margin-bottom: clamp(1rem, 2vw, 1.5rem);
        }
        
        .brand-subtitle {
          font-size: 0.9375rem;
          font-weight: 400;
          color: #64748b;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        
        .brand-description {
          font-size: 0.9375rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 280px;
        }
        
        .brand-location {
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 500;
          letter-spacing: 0.025em;
          text-transform: uppercase;
        }
        
        .footer-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #e2e8f0 20%, #e2e8f0 80%, transparent 100%);
          margin: clamp(2rem, 4vw, 3rem) 0 clamp(1rem, 2vw, 1.5rem) 0;
        }
        
        .footer-bottom {
          text-align: center;
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        
        .footer-module {
          position: relative;
        }
        
        .footer-module::before {
          content: '';
          position: absolute;
          top: -0.5rem;
          left: 0;
          width: 2rem;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          opacity: 0;
          transition: all 0.6s ease;
          transition-delay: 0.8s;
        }
        
        .footer-module:hover::before {
          opacity: 1;
          width: 3rem;
        }
        
        @media (max-width: 767px) {
          .footer-grid {
            text-align: center;
          }
          
          .brand-description {
            max-width: none;
          }
          
          .footer-module::before {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>

      <footer ref={footerRef} className="footer-container">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand Module */}
            <div className={`footer-module transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0ms' }}>
              <div className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h3 className="brand-title">{footerModules.brand.title}</h3>
                <div className="brand-subtitle">Military Mental Health</div>
                <p className="brand-description">{footerModules.brand.description}</p>
                <div className="brand-location">{footerModules.brand.location}</div>
              </div>
            </div>

            {/* Services Module */}
            <FooterModule title={footerModules.services.title} delay={100}>
              {footerModules.services.links.map((item, index) => (
                <LinkItem 
                  key={item.label} 
                  item={item} 
                  delay={200 + index * 100} 
                />
              ))}
            </FooterModule>

            {/* About Module */}
            <FooterModule title={footerModules.about.title} delay={200}>
              {footerModules.about.links.map((item, index) => (
                <LinkItem 
                  key={item.label} 
                  item={item} 
                  delay={300 + index * 100} 
                />
              ))}
            </FooterModule>

            {/* Contact Module */}
            <FooterModule title={footerModules.contact.title} delay={300}>
              {footerModules.contact.links.map((item, index) => (
                <LinkItem 
                  key={item.label} 
                  item={item} 
                  delay={400 + index * 100} 
                />
              ))}
            </FooterModule>
          </div>

          {/* Divider */}
          <div className={`footer-divider transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} style={{ transitionDelay: '600ms' }} />

          {/* Footer bottom */}
          <div className={`footer-bottom transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '800ms' }}>
            © {new Date().getFullYear()} The Lemich Clinic. Military mental health specialists.
          </div>
        </div>
      </footer>
    </>
  )
}