'use client'

import Link from 'next/link'

export default function Footer() {
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

  const LinkItem = ({ item }) => (
    <Link
      href={item.href}
      className="footer-link block hover:translate-x-1 mb-3"
      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {item.label}
    </Link>
  )

  const FooterModule = ({ title, children }) => (
    <div className="footer-module">
      <h4 className="footer-heading mb-3">{title}</h4>
      <div className="footer-content">
        {children}
      </div>
    </div>
  )

  return (
    <>
      <footer className="footer-container ">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand Module */}
            <div className="footer-module">
              <h3 className="brand-title">{footerModules.brand.title}</h3>
              <div className="brand-subtitle">Military Mental Health</div>
              <p className="brand-description">{footerModules.brand.description}</p>
              <div className="brand-location">{footerModules.brand.location}</div>
            </div>

            {/* Services Module */}
            <FooterModule title={footerModules.services.title}>
              {footerModules.services.links.map((item) => (
                <LinkItem key={item.label} item={item}/>
              ))}
            </FooterModule>

            {/* About Module */}
            <FooterModule title={footerModules.about.title}>
              {footerModules.about.links.map((item) => (
                <LinkItem key={item.label} item={item} />
              ))}
            </FooterModule>

            {/* Contact Module */}
            <FooterModule title={footerModules.contact.title}>
              {footerModules.contact.links.map((item) => (
                <LinkItem key={item.label} item={item} />
              ))}
            </FooterModule>
          </div>

          {/* Divider */}
          <div className="footer-divider " />

          {/* Footer bottom */}
          <div className="footer-bottom">
            © {new Date().getFullYear()} The Lemich Clinic. Home of Military Mental Health.
          </div>
        </div>
      </footer>
    </>
  )
}