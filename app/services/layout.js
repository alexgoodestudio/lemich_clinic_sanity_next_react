export const metadata = {
  title: 'Exclusive Services | NEXUS Letters, Summary Letters, Group Therapy | Norfolk VA',
  description: 'Specialized services for current clients at The Lemich Clinic in Norfolk, VA. NEXUS letters for veterans ($180), Summary letters for active duty ($40), Group therapy programs. Supporting military families throughout Virginia.',
  keywords: [
    // Service-specific
    'NEXUS letters Norfolk',
    'NEXUS letter Virginia',
    'NEXUS letter cost',
    'summary letters military',
    'summary letters active duty',
    'military documentation services',
    
    // Documentation types
    'VA disability NEXUS letter',
    'Independent Medical Opinion Norfolk',
    'IMO letter Virginia',
    'service connection letter',
    'military mental health documentation',
    
    // Group therapy
    'group therapy veterans',
    'military group therapy Norfolk',
    'betrayed partners group therapy',
    'men\'s relationship skills group',
    
    // Specific use cases
    'LIMDU documentation',
    'Med Board letters',
    'VA claim documentation',
    'security clearance mental health',
    
    // Location-specific
    'military mental health services Norfolk',
    'veteran services Norfolk VA',
    'TRICARE therapy Norfolk',
    'Naval Station Norfolk mental health'
  ],
  alternates: {
    canonical: 'https://lemich.netlify.app/services'
  },
  openGraph: {
    title: 'Exclusive Services for Military Families | The Lemich Clinic',
    description: 'NEXUS letters for veterans ($180), Summary letters for active duty ($40), Group therapy. Specialized mental health documentation services in Norfolk, VA.',
    url: 'https://lemich.netlify.app/services',
    type: 'website',
  }
}

export default function ServicesLayout({ children }) {
  return <>{children}</>
}