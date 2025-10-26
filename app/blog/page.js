import { client } from '@/sanity/lib/client';
import BlogClient from './BlogClient';

async function getBlogPosts() {
  try {
const posts = await client.fetch(
  `*[_type == "blogPost" && !(_id in path('drafts.**'))] | order(date desc) {
        _id,
        title,
        "slug": slug.current,
        description,
        date,
        author,
        content
      }`,
      {},
      {
        cache: 'no-store',
      }
    );
    
    console.log('✅ Fetched blog posts:', posts?.length || 0);
    return posts || [];
  } catch (error) {
    console.error('❌ Error fetching blog posts:', error);
    return [];
  }
}

export const metadata = {
  title: 'Mental Health Resources & Insights | The Lemich Clinic Blog',
  description: 'Expert guidance on military mental health, VA disability claims, PTSD treatment, and therapy for active duty service members and veterans in Norfolk, VA.',
};

export default async function Blog() {
  const blogPosts = await getBlogPosts();
  
  return <BlogClient blogPosts={blogPosts} />;
}