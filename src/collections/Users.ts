import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: "username", 
      required: true, 
      unique: true, 
      type: "text", 
    }, 
  ],
}
///home/karel/Documents/ReactProjects2025/ecommerce/src/collections/Users.ts