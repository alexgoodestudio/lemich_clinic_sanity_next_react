// app/owners/layout.js

export const metadata = {
  title: 'Meet the Owner',
  description: 'Meet the founder of Compass Point Counseling, a veteran-owned military mental health practice.',
  alternates: {
    canonical: '/owners'
  },
  openGraph: {
    title: 'Meet the Owner | Compass Point Counseling',
    description: 'Meet the founder of Compass Point Counseling, a veteran-owned military mental health practice.',
    url: '/owners',
    type: 'website',
  }
}

export default function OwnersLayout({ children }) {
  return <>{children}</>
}
