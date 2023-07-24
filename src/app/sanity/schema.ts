import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/scehemas/blockContent'
import category from './schemas/scehemas/category'
import post from './schemas/scehemas/post'
import author from './schemas/scehemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
}
