# Complete Setup Guide

## Step 1: Initial Setup

### Install Dependencies
```bash
cd lemich-nextjs
npm install
```

### Install Sanity CLI Globally (Optional but Recommended)
```bash
npm install -g @sanity/cli
```

## Step 2: Create Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Click "Create New Project"
3. Choose a project name (e.g., "Lemich Clinic")
4. Choose a dataset name: `production`
5. Copy your **Project ID**

## Step 3: Configure Environment Variables

1. Copy the example file:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your project details:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
```

## Step 4: Deploy Sanity Schemas

```bash
cd lemich-nextjs
npx sanity deploy
```

This will deploy your schemas to Sanity.io

## Step 5: Add Images

### General Images (`/public/images/`)
Copy these files from your old project:
- `unit.jpg`
- `ship.jpg`
- `new_creek.jpg`
- `1.avif`
- `2.avif`
- `3.avif`
- `owners-min.png`

### Staff Images (`/public/staffimages/`)
Copy all staff photos, ensuring they match the lastName pattern:
- `lemich-min.jpeg`
- `mcnair.avif`
- `ladikos.avif`
- etc. (see `/public/staffimages/README.md` for full list)

### Fonts (`/public/fonts/`)
Copy:
- `Tomorrow-Medium.ttf`

### Favicons (`/public/`)
Copy:
- `favicon-16x16.png`
- `favicon-32x32.png`

## Step 6: Populate Sanity CMS

### Start Development Server
```bash
npm run dev
```

### Access Sanity Studio
Visit: http://localhost:3000/studio

### Add Team Members

Click "Team Members" → "Create New"

Example for Gregory Lemich:
```
Full Name: Gregory C. Lemich, Ph.D., LPC
Role: Owner and Clinical Director
Description: [paste his bio]
Last Name: lemich
Specialties: [leave empty]
Availability: [leave empty]
Display Order: 1
Active: ✓
```

Continue adding all 19 team members with appropriate order numbers:
- Owner: order 1
- Clinicians: order 2-15
- Administration: order 16-19

### Add Blog Posts

Click "Blog Posts" → "Create New"

Example structure:
```
Title: Will Therapy Affect My Military Career or Security Clearance?
Slug: therapy-military-career-security-clearance
Description: [paste description]
Author: The Lemich Clinic Team
Publication Date: 2025-09-15
Content: [paste full HTML content from blogData.js]
Published: ✓
```

Add all 4 blog posts from your `blogData.js` file.

## Step 7: Test the Site

### Check All Pages
- ✓ Home: http://localhost:3000/
- ✓ Team: http://localhost:3000/team
- ✓ Services: http://localhost:3000/services
- ✓ Insurance: http://localhost:3000/insurance
- ✓ Owners: http://localhost:3000/owners
- ✓ Contact: http://localhost:3000/contact
- ✓ Blog: http://localhost:3000/blog
- ✓ Blog Post: http://localhost:3000/blog/[any-slug]

### Test Sanity Studio
- ✓ Can edit blog posts: http://localhost:3000/studio
- ✓ Can edit team members: http://localhost:3000/studio

## Step 8: Deploy to Production

### Option A: Vercel (Recommended)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
5. Deploy!

### Option B: Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` and `public` folders to Netlify

3. Add environment variables in Netlify dashboard

## Step 9: Configure Custom Domain

### In Vercel/Netlify:
1. Go to project settings
2. Add custom domain: `lemichclinic.com` and `www.lemichclinic.com`
3. Follow DNS configuration instructions

### Update DNS Records:
Point your domain to Vercel/Netlify nameservers

## Troubleshooting

### Images Not Showing
- Check that image filenames match exactly (case-sensitive)
- Verify images are in correct folders
- Clear browser cache

### Sanity Studio Not Loading
- Verify `.env.local` has correct project ID
- Check that you're on `http://localhost:3000/studio` (not `/admin`)
- Restart dev server after changing .env

### Build Errors
- Run `npm install` again
- Delete `node_modules` and `.next` folders, then reinstall
- Check that all environment variables are set

### Blog Posts Not Appearing
- Verify posts have `published: true` in Sanity
- Check that slugs are unique
- Restart dev server after adding posts

## Next Steps

1. ✓ Test all pages thoroughly
2. ✓ Add all team members to Sanity
3. ✓ Add all blog posts to Sanity
4. ✓ Verify all images display correctly
5. ✓ Test contact form
6. ✓ Check mobile responsiveness
7. ✓ Deploy to production
8. ✓ Configure custom domain
9. ✓ Set up SSL certificate (automatic with Vercel/Netlify)
10. ✓ Test production site

## Support

If you need help:
- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs
- Vercel Support: https://vercel.com/support

## Success! 🎉

Your site should now be live and identical to the original lemichclinic.netlify.app with the added benefit of easy content management through Sanity CMS!
