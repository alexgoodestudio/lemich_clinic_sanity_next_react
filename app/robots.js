export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/', // Portfolio project - not a real business, keep out of search indexes
      },
    ],
    sitemap: 'https://compass-point-counseling.example.com/sitemap.xml',
  }
}
