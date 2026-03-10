import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'slug',
  },
  auth: true,
  fields: [
    {
      name: "name", 
      required: true, 
      type: "text", 
      label:"Store Name", 
      admin: {
        description: "This is the store's name (eg. Karel Pro)", 
      }
    }, 
    {
        name: "slug", 
        type: "text", 
        index: true, 
        required: true, 
        unique: true, 
        admin: {
            description: 
                "This is the domain of the store: (e.g [slug].funroad.ae)"
        }, 
    }, 
    {
        name: "image", 
        type: "upload", 
        relationTo: "media"
    }, 
    {
        name: "stripeAccountId", 
        type: "text", 
        required: true, 
        admin: {
            readOnly: true,
        }, 
    }, 
  ],
}
///home/karel/Documents/ReactProjects2025/ecommerce/src/collections/Users.ts