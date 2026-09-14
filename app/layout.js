import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  metadataBase: new URL('https://compass-point-counseling.example.com'),
  title: {
    default: 'Compass Point Counseling • Military Mental Health',
    template: '%s | Compass Point Counseling'
  },
  description: 'A portfolio project for a fictional mental health clinic serving active duty military, spouses and veterans.',
  authors: [{ name: 'Compass Point Counseling' }],
  creator: 'Compass Point Counseling',
  publisher: 'Compass Point Counseling',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Compass Point Counseling | Military Mental Health Services',
    description: 'A portfolio project for a fictional mental health clinic serving active duty military, veterans, and their families.',
    url: 'https://compass-point-counseling.example.com',
    siteName: 'Compass Point Counseling',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compass Point Counseling | Military Mental Health Services',
    description: 'A portfolio project for a fictional mental health clinic serving active duty military, veterans, and their families.',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

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