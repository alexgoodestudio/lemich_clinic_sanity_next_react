# Redirects in Next.js

Next.js handles routing automatically through its file-based routing system.
The _redirects file from your Netlify deployment is not needed in Next.js.

## How Routing Works:

- `/` → `app/page.js` (Home)
- `/team` → `app/team/page.js`
- `/services` → `app/services/page.js`
- `/insurance` → `app/insurance/page.js`
- `/owners` → `app/owners/page.js`
- `/contact` → `app/contact/page.js`
- `/blog` → `app/blog/page.js`
- `/blog/[slug]` → `app/blog/[slug]/page.js`

## If You Need Custom Redirects:

Add them to `next.config.mjs`:

```javascript
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
}
```

## SPA Fallback:

Next.js handles all routes automatically. No need for:
```
/* /index.html 200
```

The Next.js router handles client-side navigation seamlessly.
