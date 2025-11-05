// app/insurance/layout.js

export const metadata = {
  title: 'Does TRICARE Cover Therapy? | Active Duty & Veterans | Norfolk VA',
  description: 'Yes - TRICARE covers 100% of mental health therapy for active duty at The Lemich Clinic in Norfolk, VA. No copay for active duty. Referral required. Serving Naval Station Norfolk, Fort Eustis, and Hampton Roads military families.',
  keywords: [
    // Question-based (HIGH VOLUME)
    'does TRICARE cover therapy',
    'does TRICARE cover mental health',
    'TRICARE therapy referral requirements',
    'how to get TRICARE mental health referral',
    'TRICARE mental health copay',
    'TRICARE off base therapy',
    'can veterans use TRICARE for therapy',
    
    // Intent-based (HIGH CONVERSION)
    'TRICARE accepted therapist Norfolk',
    'TRICARE mental health provider Norfolk VA',
    'in network TRICARE therapist',
    'TRICARE East mental health',
    
    // Problem-based (MIDDLE FUNNEL)
    'TRICARE therapy without PCM',
    'quick TRICARE referral Norfolk',
    'same day TRICARE mental health referral',
    'TRICARE therapy for military spouses',
    
    // Location + service (LOCAL INTENT)
    'TRICARE therapy Naval Station Norfolk',
    'TRICARE counseling Virginia Beach',
    'military mental health Hampton Roads',
    'TRICARE provider near me Norfolk'
  ],
  alternates: {
    canonical: 'https://lemich.netlify.app/insurance'
  },
  openGraph: {
    title: 'TRICARE Mental Health Coverage - 100% Covered for Active Duty',
    description: 'The Lemich Clinic accepts TRICARE. No copay for active duty. Referral required. Serving Norfolk, Virginia Beach, and Hampton Roads military families.',
    url: 'https://lemich.netlify.app/insurance',
    type: 'website',
  }
}

export default function InsuranceLayout({ children }) {
  return <>{children}</>
}