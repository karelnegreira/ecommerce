import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import z from "zod";
import {  Media, Tenant } from "@/payload-types";
import { TRPCError } from "@trpc/server";
import Stripe from "stripe";
import { ProductMetadata } from "../types";


export const checkoutRouter = createTRPCRouter({
    purchase: protectedProcedure
        .input(
            z.object({
                productIds: z.array(z.string()).min(1), 
                tenantSlug: z.string().min(1),
            })
        )
        .mutation(async ({ctx, input}) => {
            const products = await ctx.db.find({
                collection: "product", 
                depth: 2, 
                where: {
                    and: [
                        {
                            id: {
                                in: input.productIds,
                            }
                        }, 
                        {
                            "tenant.slug": {
                                equals: input.tenantSlug 
                            }
                        }
                    ]
                }
            })

            if (products.totalDocs !== input.productIds.length) {
                throw new TRPCError({code: "NOT_FOUND", message: "Product not found"})
            }

            const tenantData = await ctx.db.find({
                collection: "tenants", 
                limit: 1, 
                pagination: false, 
                where: {
                    slug: {
                        equals: input.tenantSlug, 
                    },
                },
            });

            const tenant = tenantData.docs[0];

            if (!tenant) {
                throw new TRPCError({
                    code: "NOT_FOUND", 
                    message: "Tenant not found"
                })
            }

            //TODO: throw error if stripe details not submitted
            const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = 
                products.docs.map((product) =>  ({
                    quantity: 1, 
                    price_data: {
                        unit_amount: product.price * 100, 
                        currency: "aed", 
                        product_data: {
                            name: product.name, 
                            metadata: {
                                stripeAccountId: tenant.stripeAccountId, 
                                id: product.id, 
                                name: product.name, 
                                price: product.price, 

                            } as ProductMetadata
                        }
                    }
                }))
        })
    , 
    getProducts: baseProcedure.input(
            z.object(
                {
                    ids: z.array(z.string()),
                }
            ), 
        ).query(async ( {ctx, input}) => {

        const data = await ctx.db.find({
            collection: "products", 
            depth: 2,  //populate catgory and image  
            where: {
                id: {
                    in: input.ids
                }
            }
          });

          if (data.totalDocs !== input.ids.length) {
            throw new TRPCError({code: "NOT_FOUND", message: "Product not found"})
          }

        return {
            ...data, 
            totalPrice: data.docs.reduce((acc, product) => acc + product.price, 0), 
            docs: data.docs.map((doc) => ({
                ...doc, 
                image: doc.image as Media | null, 
                tenant: doc.tenant as Tenant & { image: Media | null}, 
            }))
        };
    }),
});