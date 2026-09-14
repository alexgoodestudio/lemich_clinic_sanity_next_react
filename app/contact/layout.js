// app/contact/layout.js

export const metadata = {
  title: 'Contact Us',
  description: 'Schedule a confidential consultation with Compass Point Counseling. TRICARE accepted.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact Compass Point Counseling',
    description: 'Schedule a confidential consultation. TRICARE accepted.',
    url: '/contact',
    type: 'website',
  }
}

export default function ContactLayout({ children }) {
  return <>{children}</>
}
