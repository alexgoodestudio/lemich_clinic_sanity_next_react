import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Helper function to fetch all blog posts
export async function getBlogPosts() {
  return client.fetch(`*[_type == "blogPost" && published == true] | order(date desc)`)
}

// Helper function to fetch single blog post by slug
export async function getBlogPost(slug) {
  return client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug })
}

// Helper function to fetch all team members
export async function getTeamMembers() {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      description,
      lastName,
      category,
      specialties,
      availability,
      order,
      active,
      image
    }
  `)
}

// Fetch global site settings (single document)
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`)
}