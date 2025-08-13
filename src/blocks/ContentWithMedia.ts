import { Block } from 'payload'

export const ContentWithMedia: Block = {
  slug: 'ContentWithMedia',
  labels: {
    singular: 'Content with Media Block',
    plural: 'Content with Media Blocks',
  },
  fields: [
    {
      type: 'richText',
      name: 'content',
    },
  ],
}
