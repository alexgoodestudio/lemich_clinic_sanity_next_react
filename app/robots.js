export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'], // Block Sanity Studio from indexing
      },
    ],
    sitemap: 'https://lemich.netlify.app/sitemap.xml',
  }
}