
import {getPayload} from "payload";

import config from '@payload-config';


  // Define your categories and subcategories
const categories = [
    {
        name: "All", 
        slug: "all", 
    },
    {
      name: 'Electronics',
      color: '#3b82f6', // blue-500
      slug: 'electronics',
      subcategories: [
        { name: 'Mobile Phones', slug: 'mobile-phones' },
        { name: 'Laptops', slug: 'laptops' },
        { name: 'Cameras', slug: 'cameras' },
        { name: 'Smart Watches', slug: 'smart-watches' },
      ],
    },
    
    {
      name: 'Fashion',
      color: '#ec4899', // pink-500
      slug: 'fashion',
      subcategories: [
        { name: "Men's Clothing", slug: 'mens-clothing'},
        { name: "Women's Clothing", slug: 'womens-clothing'},
        { name: 'Footwear', slug: 'footwear' },
        { name: 'Bags & Accessories', slug: 'bags-accessories' },
      ],
    },
    {
      name: 'Fashion',
      color: '#ec4899', // pink-500
      slug: 'fashion',
      subcategories: [
        { name: "Men's Clothing", slug: 'mens-clothing'},
        { name: "Women's Clothing", slug: 'womens-clothing'},
        { name: 'Footwear', slug: 'footwear' },
        { name: 'Bags & Accessories', slug: 'bags-accessories' },
      ],
    },
    {
      name: 'Fashion',
      color: '#ec4899', // pink-500
      slug: 'fashion',
      subcategories: [
        { name: "Men's Clothing", slug: 'mens-clothing'},
        { name: "Women's Clothing", slug: 'womens-clothing'},
        { name: 'Footwear', slug: 'footwear' },
        { name: 'Bags & Accessories', slug: 'bags-accessories' },
      ],
    },
    {
      name: 'Fashion',
      color: '#ec4899', // pink-500
      slug: 'fashion',
      subcategories: [
        { name: "Men's Clothing", slug: 'mens-clothing'},
        { name: "Women's Clothing", slug: 'womens-clothing'},
        { name: 'Footwear', slug: 'footwear' },
        { name: 'Bags & Accessories', slug: 'bags-accessories' },
      ],
    },
    {
      name: 'Home & Kitchen', 
      slug: 'home-kitchen',
      color: '#10b981', // emerald-500
      subcategories: [
        { name: 'Furniture', slug: 'furniture' },
        { name: 'Home Decor', slug: 'home-decor' },
        { name: 'Kitchen Appliances', slug: 'kitchen-appliances' },
        { name: 'Storage Solutions', slug: 'storage-solutions'},
      ],
    },
    
    {
      name: 'Health & Beauty',
      slug: 'health-beauty',
      color: '#f59e0b', // amber-500
      subcategories: [
        { name: 'Skincare', slug: 'skincare' },
        { name: 'Hair Care', slug: 'hair-care' },
        { name: 'Makeup', slug: 'makeup' },
        { name: 'Vitamins & Supplements', slug: 'vitamins-supplements' },
      ],
    },
    {
      name: 'Sports & Outdoors',
      slug: 'sports-outdoors',
      color: '#8b5cf6', // violet-500
      subcategories: [
        { name: 'Gym Equipment', slug: 'gym-equipment' },
        { name: 'Cycling', slug: 'cycling' },
        { name: 'Camping & Hiking', slug: 'camping-hiking'},
        { name: 'Sportswear', slug: 'sportswear' },
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
  try {
    await seed();
    console.log("Seeding completed successfully")
    process.exit(0);
  } catch (error) {
    console.error("Error during seeding");
    process.exit(1);  
  }
  