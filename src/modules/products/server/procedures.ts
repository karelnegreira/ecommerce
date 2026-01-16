import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";

import type { Where } from "payload";
import { Category, Product } from "@/payload-types";


export const productsRouter = createTRPCRouter({
    getMany: baseProcedure.input(
        z.object(
            {
                category: z.string().nullable().optional(), 
            }
        ), 
    ).query(async ( {ctx, input}) => {
        const where: Where = {}

        if (input.category) {
            const categoriesData = await ctx.db.find({
                collection: "categories", 
                limit: 1, 
                depth: 1, //populate subcategorySlugs
                pagination: false, 
                where: {
                    slug: {
                        equals: input.category, 
                    }
                }
            });

            console.log(JSON.stringify(categoriesData, null, 2));

            const formattedData = categoriesData.docs.map((doc) => ({
                ...doc, 
                subcategorySlugs: (doc.subcategorySlugs?.docs ?? []).map((doc) => ({
                  ...(doc as Category), 
                  subcategorySlugs: undefined, 
                }))
              }));
            
            const subcategorySlugs = [];
            const parentCategory = formattedData[0];

            if (parentCategory) {
                subcategorySlugs.push(
                    ...parentCategory.subcategorySlugs.map((subcategory) => subcategory.slug)
                );
            }

            where["category.slug"] = {
                in: [parentCategory.slug, ...subcategorySlugs]
            }
        }

        const data = await ctx.db.find({
            collection: "products", 
            depth: 1,  //populate catgory and image  
            where, 
          });

        //artificial delay for dev/test
        //await new Promise((resolve) => setTimeout(resolve, 5000));

        return data;
    }),
});