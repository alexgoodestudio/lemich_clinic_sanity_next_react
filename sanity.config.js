import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Lemich Clinic CMS',
  
  projectId: 'm59qgyz0',
  dataset: 'production',
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool()
  ],
  
  schema: {
    types: schemaTypes,
  },
})