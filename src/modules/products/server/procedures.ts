import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";

import type { Where } from "payload";


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
            const categoryData = await ctx.db.find({
                collection: "categories", 
                limit: 1, 
                pagination: false, 
                where: {
                    slug: {
                        equals: input.category, 
                    }
                }
            });

            const category = categoryData.docs[0];

            if (category) {
                where["category.slug"] = {
                    equals: input.category, 
                }
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