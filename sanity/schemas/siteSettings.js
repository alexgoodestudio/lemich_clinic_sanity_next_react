import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline on homepage',
      initialValue: 'Home of Military Mental Health',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      description: 'Text below hero title',
    }),
    
    // Banner
    defineField({
      name: 'bannerMessage',
      title: 'Banner Message',
      type: 'string',
      description: 'Scrolling banner text',
      initialValue: 'Request confidential mental health support today',
    }),
    defineField({
      name: 'bannerLocation',
      title: 'Banner Location',
      type: 'string',
      description: 'Location text in banner',
      initialValue: 'Located in Norfolk, Virginia',
    }),
    
    // Mission Statement
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      rows: 5,
      description: 'Main mission statement text',
    }),
    
    // Statistics
    defineField({
      name: 'yearsOfService',
      title: 'Years of Service',
      type: 'number',
      initialValue: 7,
    }),
    defineField({
      name: 'tricareCoverage',
      title: 'TRICARE Coverage %',
      type: 'number',
      initialValue: 100,
    }),
    defineField({
      name: 'serviceMembersHelped',
      title: 'Service Members Helped',
      type: 'number',
      initialValue: 650,
    }),
    defineField({
      name: 'numberOfClinicians',
      title: 'Number of Clinicians',
      type: 'number',
      initialValue: 14,
    }),
    
    // Footer
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 2,
      description: 'Brief description in footer',
      initialValue: 'Specialized mental health care for military families and veterans in Norfolk, Virginia.',
    }),
    
    // Contact Information
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '(757) 536-1233',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'info@lemichclinic.org',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
      initialValue: 'Norfolk, VA',
    }),
    
    // Social Links
    defineField({
      name: 'psychologyTodayUrl',
      title: 'Psychology Today URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    
    // Crisis Line
    defineField({
      name: 'crisisLine',
      title: 'Crisis Line Number',
      type: 'string',
      initialValue: '1-800-273-8255',
    }),
    defineField({
      name: 'crisisTextNumber',
      title: 'Crisis Text Number',
      type: 'string',
      initialValue: '838255',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global site configuration',
      }
    },
  },
})