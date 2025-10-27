import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  metadataBase: new URL('https://lemich.netlify.app'),
  title: {
    default: 'The Lemich Clinic • Norfolk, Virginia • Military Mental Health',
    template: '%s | The Lemich Clinic'
  },
  description: 'The Lemich Clinic in Norfolk, Virginia offers expert mental health care for active duty military, spouses and veterans. Specializing in PTSD treatment, trauma recovery, and anxiety therapy.',
  keywords: [
    'military mental health',
    'Norfolk VA therapy',
    'PTSD treatment',
    'veterans therapy',
    'TRICARE therapy',
    'military counseling',
    'trauma therapy Norfolk',
    'active duty mental health',
    'military spouse therapy',
    'NEXUS letters VA'
  ],
  authors: [{ name: 'The Lemich Clinic Team' }],
  creator: 'The Lemich Clinic',
  publisher: 'The Lemich Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'The Lemich Clinic | Military Mental Health Services',
    description: 'Expert mental health care for active duty military, veterans, and their families in Norfolk, VA.',
    url: 'https://lemich.netlify.app',
    siteName: 'The Lemich Clinic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lemich Clinic | Military Mental Health Services',
    description: 'Expert mental health care for active duty military, veterans, and their families in Norfolk, VA.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "The Lemich Clinic",
    "alternateName": "The Lemich Clinic for Military Mental Health",
    "description": "Specialized mental health services for military personnel, veterans, and their families in Norfolk, Virginia",
    "url": "https://lemich.netlify.app",
    "telephone": "+1-757-536-1233",
    "email": "info@lemichclinic.org",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5205 Colley Ave",
      "addressLocality": "Norfolk",
      "addressRegion": "VA",
      "postalCode": "23508",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.870644",
      "longitude": "-76.321152"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Virginia"
      },
      {
        "@type": "City",
        "name": "Norfolk"
      },
      {
        "@type": "City",
        "name": "Virginia Beach"
      },
      {
        "@type": "City",
        "name": "Hampton"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "paymentAccepted": ["TRICARE", "Cash", "Insurance"],
    "medicalSpecialty": [
      "Psychiatry",
      "Mental Health Counseling",
      "PTSD Treatment",
      "Trauma Therapy",
      "Military Psychology"
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "PTSD Treatment"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Trauma Therapy"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Family Counseling"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Military Transition Support"
      }
    ],
    "sameAs": [
      "https://www.psychologytoday.com/us/therapists/the-lemich-clinic-for-military-mental-health-norfolk-va/755325",
      "https://www.facebook.com/p/The-Lemich-Clinic-For-Military-Mental-Health-100086257112340/"
    ]
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" href="https://lemich.netlify.app" />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        
        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=east"
        />
      </head>
      <body>
        {children}
        
        {/* Bootstrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
          crossOrigin="anonymous"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
          integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  )
}