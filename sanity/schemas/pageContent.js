import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page ID',
      type: 'string',
      description: 'Unique identifier (do not change after creation)',
      options: {
        list: [
          { title: 'Insurance Page', value: 'insurance' },
          { title: 'Owners Page', value: 'owners' },
          { title: 'Services Page', value: 'services' },
          { title: 'Contact Page', value: 'contact' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
            },
            {
              name: 'sectionContent',
              title: 'Section Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H2', value: 'h2' },
                    { title: 'H3', value: 'h3' },
                    { title: 'H4', value: 'h4' },
                  ],
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Numbered', value: 'number' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'sectionTitle',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pageId: 'pageId',
    },
    prepare(selection) {
      const { title, pageId } = selection
      return {
        title,
        subtitle: pageId?.toUpperCase(),
      }
    },
  },
})
