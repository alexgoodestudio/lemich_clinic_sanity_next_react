export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette'] // Add metadata options
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.'
        }
      ]
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      description: 'Used for sorting and identification'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Owner', value: 'owner' },
          { title: 'Clinician', value: 'clinician' },
          { title: 'Administration', value: 'admin' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'specialties',
      title: 'Specialties',
      type: 'string'
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    }
  ]
}