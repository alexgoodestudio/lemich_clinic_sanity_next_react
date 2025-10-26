import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

async function getBlogPost(slug) {
  try {
    const post = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        description,
        date,
        author,
        content
      }`,
      { slug },
      {
        cache: 'no-store',
      }
    );
    
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | The Lemich Clinic',
    };
  }
  
  return {
    title: `${post.title} | The Lemich Clinic`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return <BlogPostClient post={post} />;
}