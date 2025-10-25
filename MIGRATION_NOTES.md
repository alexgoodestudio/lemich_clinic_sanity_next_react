# Migration Notes: Blog Data

## Migrating from blogData.js to Sanity

Your old project had blog posts stored in `blogData.js`. Here's how to migrate them to Sanity CMS.

## Blog Posts to Add

### Post 1
```
Title: Will Therapy Affect My Military Career or Security Clearance?
Slug: therapy-military-career-security-clearance
Date: 2025-09-15
Author: The Lemich Clinic Team
Description: Straight answers about mental health treatment and your military career. What actually happens when you seek help, and what the 2017 DoD policy changes mean for you.
```

### Post 2
```
Title: NEXUS Letters for VA Disability Claims: What Veterans Actually Need to Know
Slug: va-disability-nexus-letter-veterans-guide
Date: 2025-09-22
Author: The Lemich Clinic Team
Description: If your VA claim was denied or you need to prove service connection, a NEXUS letter might be what's missing. Here's what it is, when you need one, and how to get one that actually helps.
```

### Post 3
```
Title: Why Does Civilian Life Feel Harder Than Deployment? Understanding Veteran Transition Struggles
Slug: why-civilian-life-feels-harder-than-deployment
Date: 2025-09-28
Author: The Lemich Clinic Team
Description: You made it through deployments. So why does being home feel impossible? Understanding why transition is harder than you expected and what actually helps.
```

### Post 4
```
Title: Your Marriage Is Falling Apart and You Do Not Know How to Fix It
Slug: veteran-marriage-problems-ptsd-what-helps
Date: 2025-09-30
Author: The Lemich Clinic Team
Description: PTSD, anger, and disconnection are destroying your relationship. What actually works when communication and patience have not helped.
```

## Content Format

The full HTML content for each post is available in your old `blogData.js` file. When adding to Sanity:

1. Copy the entire `content` field (HTML) from blogData.js
2. Paste it into the "Content (HTML)" field in Sanity Studio
3. The HTML will be rendered exactly as it was on your old site

## Important Notes

- Keep all HTML formatting intact
- Links within blog posts should use relative paths (e.g., `/contact`, `/services`)
- Internal blog links should use `/blog/[slug]` format
- The blog post content includes styled HTML that will render with the `.blog-post-content` CSS class

## Why This Structure?

The HTML content field allows you to:
1. Maintain exact formatting from your original site
2. Include complex layouts and styling
3. Keep all links and formatting intact
4. Easily update content in Sanity Studio

## Alternative: Rich Text Editor

If you prefer a visual editor instead of HTML:
1. Consider using Sanity's Portable Text field type
2. You would need to convert HTML to Portable Text format
3. This is more work initially but easier to edit later

For now, keeping HTML is the fastest way to migrate and maintain exact styling.

## Verification Checklist

After adding all blog posts to Sanity:
- [ ] All 4 posts added
- [ ] Slugs match original (important for SEO)
- [ ] Dates are correct
- [ ] All posts marked as "Published"
- [ ] Content displays correctly on /blog page
- [ ] Individual post pages load correctly
- [ ] Internal links work
- [ ] Formatting looks identical to original site
