
import {getPayload} from 'payload';
import config from "@payload-config";

  // Define your categories and subcategories
const categories = [
    {
        name: "All", 
        slug: "all", 
    },
    {
      name: 'Electronics',
      slug: 'electronics',
      color: '#3b82f6', // blue-500
      subcategories: [
        { name: 'Mobile Phones', slug: 'mobile-phones', color: '#60a5fa' },
        { name: 'Laptops', slug: 'laptops', color: '#60a5fa' },
        { name: 'Cameras', slug: 'cameras', color: '#60a5fa' },
        { name: 'Smart Watches', slug: 'smart-watches', color: '#60a5fa' },
      ],
    },
    {
      name: 'Fashion',
      slug: 'fashion',
      color: '#ec4899', // pink-500
      subcategories: [
        { name: "Men's Clothing", slug: 'mens-clothing', color: '#f472b6' },
        { name: "Women's Clothing", slug: 'womens-clothing', color: '#f472b6' },
        { name: 'Footwear', slug: 'footwear', color: '#f472b6' },
        { name: 'Bags & Accessories', slug: 'bags-accessories', color: '#f472b6' },
      ],
    },
    {
      name: 'Home & Kitchen', 
      slug: 'home-kitchen',
      color: '#10b981', // emerald-500
      subcategories: [
        { name: 'Furniture', slug: 'furniture', color: '#34d399' },
        { name: 'Home Decor', slug: 'home-decor', color: '#34d399' },
        { name: 'Kitchen Appliances', slug: 'kitchen-appliances', color: '#34d399' },
        { name: 'Storage Solutions', slug: 'storage-solutions', color: '#34d399' },
      ],
    },
    {
      name: 'Health & Beauty',
      slug: 'health-beauty',
      color: '#f59e0b', // amber-500
      subcategories: [
        { name: 'Skincare', slug: 'skincare', color: '#fbbf24' },
        { name: 'Hair Care', slug: 'hair-care', color: '#fbbf24' },
        { name: 'Makeup', slug: 'makeup', color: '#fbbf24' },
        { name: 'Vitamins & Supplements', slug: 'vitamins-supplements', color: '#fbbf24' },
      ],
    },
    {
      name: 'Sports & Outdoors',
      slug: 'sports-outdoors',
      color: '#8b5cf6', // violet-500
      subcategories: [
        { name: 'Gym Equipment', slug: 'gym-equipment', color: '#a78bfa' },
        { name: 'Cycling', slug: 'cycling', color: '#a78bfa' },
        { name: 'Camping & Hiking', slug: 'camping-hiking', color: '#a78bfa' },
        { name: 'Sportswear', slug: 'sportswear', color: '#a78bfa' },
      ],
    },
  ];
  

  const seed  = async () => {
    const payload = await getPayload({ config });

    for (const category of categories) {
        const parentCategory = await payload.create({
            collection: "categories", 
            data: {
                name: category.name,
                slug: category.slug, 
                color: category.color, 
                parent: null, 
            }, 
        });

        for (const subCategory of category.subcategories || []) {
            await payload.create({
                collection: "categories", 
                data: {
                    name: subCategory.name, 
                    slug: subCategory.slug, 
                    parent: parentCategory.id
                },
            });
        }
    }
  }

  await seed();

  process.exit(0);