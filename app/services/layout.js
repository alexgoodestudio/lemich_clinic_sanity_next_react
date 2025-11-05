// app/services/layout.js

export const metadata = {
  title: 'NEXUS Letters for VA Claims | Psychological Testing | Norfolk VA',
  description: 'Get professional NEXUS letters for VA disability claims, Summary letters for active duty, Full psychological evaluations, and Group therapy. Licensed clinicians serving veterans and military families in Norfolk, Virginia.',
  keywords: [
    // High-intent NEXUS queries (YOUR TRAFFIC GOAL)
    'NEXUS letter for VA claim',
    'where to get NEXUS letter',
    'NEXUS letter cost',
    'how much NEXUS letter',
    'NEXUS letter near me',
    'NEXUS letter Norfolk Virginia',
    'Independent Medical Opinion VA claim',
    'IMO letter for veterans',
    
    // Problem-based (MIDDLE FUNNEL)
    'VA claim denied need NEXUS letter',
    'prove service connection VA',
    'VA disability claim evidence',
    'medical evidence for VA claim',
    'service connection letter',
    
    // Comparison queries
    'NEXUS letter vs DBQ',
    'NEXUS letter vs medical records',
    'best NEXUS letter provider Virginia',
    
    // Summary letters (SECONDARY SERVICE)
    'summary letter for command',
    'military documentation letter',
    'active duty mental health documentation',
    'LIMDU letter',
    'Med Board documentation',
    
    // Psychological testing (NEW SERVICE)
    'psychological evaluation for VA claim',
    'PTSD evaluation for veterans',
    'military psychological testing Norfolk',
    'ADHD testing veterans',
    
    // Group therapy
    'military group therapy Norfolk',
    'veterans group therapy Virginia Beach',
    'betrayed partners therapy group',
    'relationship skills group military',
    
    // Location-specific
    'NEXUS letter Norfolk VA',
    'veteran documentation services Virginia',
    'military mental health documentation Hampton Roads',
    'VA claim help Norfolk'
  ],
  alternates: {
    canonical: 'https://lemich.netlify.app/services'
  },
  openGraph: {
    title: 'NEXUS Letters | VA Disability Claim Documentation | Norfolk VA',
    description: 'Professional NEXUS letters from licensed clinicians. Comprehensive record review, meets VA standards. Serving veterans throughout Virginia.',
    url: 'https://lemich.netlify.app/services',
    type: 'website',
  }
}

export default function ServicesLayout({ children }) {
  return <>{children}</>
}
