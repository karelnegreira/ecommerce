
import { getPayload } from "payload";
import configPromise from '@payload-config';

import Footer from "./footer";
import {Navbar} from "./navbar";
import { SearchFilters } from "./search-filter";
import { getQueryClient, HydrateClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";


interface Props {
    children: React.ReactNode;
}
 
 const Layout = async ( { children }: Props) => {

  const payload = await getPayload({
    config: configPromise
  })
  /*
  const data = await payload.find({
    collection: "categories", 
    depth: 1,  //populate subcategorys
    pagination: false, 
    where: {
      parent: {
        exists: false, 
      },
    },
    sort: "name"
  });

  const formattedData: CustomCategory[] = data.docs.map((doc) => ({
    ...doc, 
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      ...(doc as Category), 
      subcategories: undefined, 
    }))
  }));
  */

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.categories.getMany.queryOptions(),
  );


   return (
     <div className="flex flex-col min-h-screen">
        <Navbar />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense>
                    <SearchFilters />
                </Suspense>
            </HydrationBoundary>
        <div className="flex-1 bg-[#F4F4F0]">
          {children}
        </div>
        <Footer />
     </div>
   )
 }
 
 export default Layout
 