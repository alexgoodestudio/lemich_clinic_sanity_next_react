'use client'

import Link from 'next/link'
import { useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  const emailRef = useRef(null)

  const footerModules = {
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
      ]
    }
  }

  const handleEmailHover = () => {
    gsap.to(emailRef.current, {
      color: '#b5cde7',
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleEmailLeave = () => {
    gsap.to(emailRef.current, {
      color: '#ffffff',
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const LinkItem = ({ item }) => (
    <li className="mb-3">
      <Link
        href={item.href}
        className="text-md text-slate-300 hover:text-slate-100 text-decoration-none d-inline-flex align-items-center gap-2 transition-colors"
        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {item.label}
        <ArrowUpRight size={14} strokeWidth={1.5} />
      </Link>
    </li>
  )

  return (
    <>
      <footer className="bg-slate-900 text-slate-100 pt-32 pb-8">
        <div className="container-fluid px-4 px-lg-5">

          {/* Primary Content Grid */}
          <div className="row mb-5 pb-5 border-bottom border-slate-700">

            {/* Clinic Statement */}
            <div className="col-lg-5 col-12 mb-5 mb-lg-0 d-flex ps-lg-5">
              <div className="text-start">
                <h2 className="text-4xl tomorrow font-bold mb-2 text-slate-100">
                  The Lemich Clinic
                </h2>
                <p className="text-xl tracking-wide text-slate-300">
                  Home of Military Mental Health
                </p>
                <p className="text-sm font-mono text-slate-400">
                  Norfolk, Virginia
                </p>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="col-lg-7 col-12">
              <div className="row">

                {/* Services Links */}
                <div className="col-md-4 text-start col-12 mb-4 mb-md-0">
                  <h6 className="text-lg font-mono font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    {footerModules.services.title}
                  </h6>
                  <ul className="list-unstyled">
                    {footerModules.services.links.map((item) => (
                      <LinkItem key={item.label} item={item} />
                    ))}
                  </ul>
                </div>

                {/* About Links */}
                <div className="col-md-4 text-start col-12 mb-4 mb-md-0">
                  <h6 className="text-lg font-mono font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    {footerModules.about.title}
                  </h6>
                  <ul className="list-unstyled">
                    {footerModules.about.links.map((item) => (
                      <LinkItem key={item.label} item={item} />
                    ))}
                  </ul>
                </div>

                {/* Connect Links */}
                <div className="col-md-4 text-start col-12">
                  <h6 className="text-lg font-mono font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    {footerModules.contact.title}
                  </h6>
                  <ul className="list-unstyled">
                    {footerModules.contact.links.map((item) => (
                      <LinkItem key={item.label} item={item} />
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="row align-items-center">
            <div className="col-md-6 col-12 mb-3 mb-md-0">
              <p className="text-sm text-slate-200 mb-0">
                © {year} The Lemich Clinic — Norfolk, Virginia
              </p>
            </div>
            <div className="col-md-6 col-12 text-md-end">
              <a
                href="mailto:info@lemichclinic.org"
                ref={emailRef}
                className="text-sm mb-0 d-inline-block"
                onMouseEnter={handleEmailHover}
                onMouseLeave={handleEmailLeave}
                style={{
                  cursor: 'pointer',
                  userSelect: 'none',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderBottom: '2px solid #b5cde7',
                  transition: 'border-bottom 0.3s ease'
                }}
              >
                info@lemichclinic.org
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}
