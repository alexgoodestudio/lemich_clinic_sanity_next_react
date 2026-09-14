// app/insurance/layout.js

export const metadata = {
  title: 'Insurance & Payment',
  description: 'TRICARE is accepted with no copay for active duty. Referral required.',
  alternates: {
    canonical: '/insurance'
  },
  openGraph: {
    title: 'Insurance & Payment | Compass Point Counseling',
    description: 'TRICARE accepted. No copay for active duty. Referral required.',
    url: '/insurance',
    type: 'website',
  }
}

export default function InsuranceLayout({ children }) {
  return <>{children}</>
}
