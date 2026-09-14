// app/services/layout.js

export const metadata = {
  title: 'Clinical Services',
  description: 'NEXUS letters, psychological evaluations, and group therapy for veterans and military families.',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'Clinical Services | Compass Point Counseling',
    description: 'NEXUS letters, psychological evaluations, and group therapy for veterans and military families.',
    url: '/services',
    type: 'website',
  }
}

export default function ServicesLayout({ children }) {
  return <>{children}</>
}
