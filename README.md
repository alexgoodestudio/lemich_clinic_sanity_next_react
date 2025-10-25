# The Lemich Clinic - Next.js Website

A military mental health clinic website built with Next.js, Sanity CMS, Bootstrap, and GSAP animations.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **Sanity.io** - Headless CMS for blog posts and team members
- **Bootstrap 5** - Layout and structure
- **Tailwind CSS** - Color utilities only
- **GSAP** - Animations and transitions
- **Lucide React** - Icons

## 📁 Project Structure

```
lemich-nextjs/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and individual posts
│   ├── contact/           # Contact form
│   ├── insurance/         # Insurance information
│   ├── owners/            # About the owners
│   ├── services/          # Services offered
│   ├── team/              # Team members (Sanity CMS)
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/            # React components
├── lib/                   # Sanity client & utilities
├── sanity/                # Sanity schemas
│   └── schemas/
│       ├── blogPost.js    # Blog post schema
│       ├── teamMember.js  # Team member schema
│       └── index.js
├── public/                # Static assets
│   ├── images/           # General images
│   ├── staffimages/      # Team member photos
│   ├── fonts/            # Custom fonts
│   ├── favicon-16x16.png
│   └── favicon-32x32.png
└── sanity.config.js       # Sanity Studio config
```

## 🔧 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Sanity CMS

1. Create a Sanity project at [sanity.io/manage](https://sanity.io/manage)
2. Copy `.env.local.example` to `.env.local`
3. Add your Sanity project ID and dataset:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Initialize Sanity Studio:
```bash
npm run studio
```

5. Visit `http://localhost:3000/studio` to access Sanity Studio
6. Create your blog posts and team members in the CMS

### 3. Add Images

Place your images in the following folders:

**`/public/images/`** - General website images:
- `unit.jpg` - Military unit (Hero)
- `ship.jpg` - Naval ship (Hero)
- `new_creek.jpg` - Creek/water (Insurance)
- `1.avif`, `2.avif`, `3.avif` - Service cards
- `owners-min.png` - Owners photo

**`/public/staffimages/`** - Team member photos:
- Name files as: `[lastName]-min.jpeg` or `[lastName].avif`
- Example: `lemich-min.jpeg`

**`/public/fonts/`** - Custom fonts:
- `Tomorrow-Medium.ttf`

**`/public/`** - Favicons (root):
- `favicon-16x16.png`
- `favicon-32x32.png`

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 5. Access Sanity Studio
Visit [http://localhost:3000/studio](http://localhost:3000/studio)

## 📝 Content Management

### Blog Posts (Sanity CMS)
1. Go to `/studio` in your browser
2. Click "Blog Posts"
3. Create new posts with:
   - Title
   - Slug (auto-generated from title)
   - Description
   - Author
   - Publication Date
   - Content (HTML)
   - Published status

### Team Members (Sanity CMS)
1. Go to `/studio` in your browser
2. Click "Team Members"
3. Create team members with:
   - Full Name
   - Role (select from dropdown)
   - Description
   - Last Name (for image matching)
   - Specialties (optional)
   - Availability (optional)
   - Display Order (number)
   - Active status

The team members will automatically be sorted by "Display Order" and grouped by role on the Team page.

## 🎨 Styling

- **Bootstrap 5** is used for ALL layout (container, row, col, padding, margin, gaps, etc.)
- **Tailwind CSS** is used ONLY for colors (bg-*, text-*, border-*)
- Custom CSS is in `app/globals.css`
- Mobile-responsive design is built-in
- GSAP animations preserve all transitions from original site

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
4. Deploy!

### Build for Production
```bash
npm run build
npm start
```

## 📚 Key Features

- ✅ Fully responsive design
- ✅ Server-side rendering (SSR)
- ✅ SEO optimized with metadata
- ✅ Sanity CMS for easy content management
- ✅ GSAP animations on scroll
- ✅ Bootstrap layout system
- ✅ Contact form with validation
- ✅ Blog with individual post pages
- ✅ Team member management
- ✅ Mobile-friendly navigation

## 🔍 SEO

Each page has custom metadata configured in the route files:
- Title tags
- Meta descriptions
- Open Graph tags
- Structured data (JSON-LD) in root layout

## 📞 Support

For questions or issues:
- Email: info@lemichclinic.org
- Phone: (757) 536-1233

## 📄 License

© 2024 The Lemich Clinic. All rights reserved.
