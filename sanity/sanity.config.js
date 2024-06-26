import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
// import { visionTool } from '@sanity/vision';
import schemaTypes from './schemas/schemaTypes';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set(['about']);

export default defineConfig({
  name: 'blog',
  title: 'blog',
  projectId: 's2w7hldl',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) => S.list()
        .title('Content')
        .items([

          // Our singleton type has a list item with a custom child
          S.listItem()
            .title('About')
            .id('about')
            .child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType('about')
                .documentId('about')
                .title('About'),
            ),

          // Regular document types
          S.documentTypeListItem('post').title('Blog posts'),
          S.documentTypeListItem('run').title('Runs'),
          S.documentTypeListItem('mainLink').title('Main links'),
        ]),
    }),
  //  visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) => (singletonTypes.has(context.schemaType)
      ? input.filter(({ action }) => action && singletonActions.has(action))
      : input),
  },
});
