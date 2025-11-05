// app/contact/layout.js

export const metadata = {
  title: 'Schedule Confidential Military Mental Health Consultation | Norfolk VA',
  description: 'Contact The Lemich Clinic for confidential military mental health services in Norfolk, VA. Same-week appointments available. TRICARE accepted. Serving active duty, veterans, and military families at Naval Station Norfolk and Hampton Roads.',
  keywords: [
    // Action-based (HIGH INTENT)
    'schedule military mental health appointment',
    'contact military therapist Norfolk',
    'book TRICARE therapy appointment',
    'military mental health consultation Norfolk',
    'schedule PTSD appointment Norfolk',
    
    // Privacy/confidentiality (CONCERN-BASED)
    'confidential military counseling Norfolk',
    'private military therapy Norfolk',
    'confidential mental health consultation',
    'secure military therapy contact',
    
    // Question-based (MIDDLE FUNNEL)
    'how to schedule military therapy',
    'how to contact military mental health',
    'military therapist near me contact',
    'TRICARE therapy appointment process',
    
    // Service-specific contact
    'NEXUS letter consultation',
    'PTSD therapy consultation Norfolk',
    'military family counseling contact',
    'veteran therapy appointment Norfolk',
    
    // Location-specific
    'military mental health Norfolk contact',
    'Naval Station Norfolk therapist contact',
    'Virginia Beach military counseling',
    'Hampton Roads military therapy appointment',
    
    // Urgency-based
    'same week military therapy appointment',
    'emergency military mental health Norfolk',
    'crisis military counseling contact'
  ],
  alternates: {
    canonical: 'https://lemich.netlify.app/contact'
  },
  openGraph: {
    title: 'Contact The Lemich Clinic | Confidential Military Mental Health | Norfolk VA',
    description: 'Schedule your confidential consultation. TRICARE accepted. Same-week appointments for active duty, veterans, and military families.',
    url: 'https://lemich.netlify.app/contact',
    type: 'website',
  }
}

export default function ContactLayout({ children }) {
  return <>{children}</>
}
