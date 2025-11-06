export const metadata = {
  title: 'Dr. Gregory Lemich (PhD) & Jennifer Lemich | Navy Veteran-Owned | Norfolk VA',
  description: 'Meet the founders of The Lemich Clinic: Dr. Gregory Lemich (PhD in Counselor Education, ODU Professor) and Jennifer Lemich (22-year Navy veteran). Veteran-owned military mental health clinic in Norfolk, Virginia, dedicated to serving active duty, veterans, and military families.',
  keywords: [
    // Founder name searches (VERIFICATION INTENT)
    'Gregory Lemich PhD',
    'Dr Gregory Lemich Norfolk',
    'Gregory Lemich Old Dominion University',
    'Gregory Lemich counselor education',
    'Jennifer Lemich Navy veteran',
    'Jennifer Lemich Navy Norfolk',
    
    // Veteran-owned business (TRUST SIGNAL)
    'veteran owned mental health clinic',
    'Navy veteran owned therapy Norfolk',
    'military veteran owned counseling',
    'veteran owned business Norfolk VA',
    'military spouse owned business',
    
    // Credential verification searches
    'PhD military mental health Norfolk',
    'licensed professional counselor PhD',
    'ODU adjunct professor mental health',
    'counselor education supervision PhD',
    
    // Military connection keywords
    'Navy veteran therapist owner',
    'retired Navy mental health clinic',
    'military family owned therapy practice',
    '22 year Navy veteran counseling',
    
    // Local business ownership
    'who owns Lemich Clinic',
    'Lemich Clinic founders',
    'military mental health clinic owners Norfolk',
    'veteran owned therapy practice Virginia',
    
    // Trust/credibility searches
    'military mental health clinic credentials',
    'PhD owned therapy practice',
    'veteran owned mental health services',
    'military family therapy clinic Norfolk'
  ],
  alternates: {
    canonical: 'https://lemich.netlify.app/owners'
  },
  openGraph: {
    title: 'Veteran-Owned Military Mental Health Clinic | Dr. Lemich (PhD) | Norfolk VA',
    description: 'Founded by Dr. Gregory Lemich (PhD) and Jennifer Lemich (22-year Navy veteran). Dedicated to serving military families in Norfolk, Virginia.',
    url: 'https://lemich.netlify.app/owners',
    type: 'website',
  }
}

export default function OwnersLayout({ children }) {
  return <>{children}</>
}