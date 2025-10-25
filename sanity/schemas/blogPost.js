export default {
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'The Lemich Clinic Team',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content (HTML)',
      type: 'text',
      description: 'HTML content for the blog post',
      validation: Rule => Rule.required()
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      author: 'author'
    },
    prepare(selection) {
      const {title, date, author} = selection
      return {
        title: title,
        subtitle: `${date} by ${author}`
      }
    }
  }
}
