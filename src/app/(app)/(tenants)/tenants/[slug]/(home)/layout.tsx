import { DEFAULT_LIMIT } from "@/constants";
import { Footer } from "@/modules/tenants/ui/components/footer";
import { Navbar } from "@/modules/tenants/ui/components/navbar";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{slug: string}>;
}

const Layout = async ({children, params}: LayoutProps) => {
    const {slug} = await params;

    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.tenants.getOne.queryOptions({
        slug, 
    }));

    return (
        <div className="min-h-screen bg-[#FFB6C1] flex flex-col">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Navbar slug={slug}/>
            </HydrationBoundary>
            
            <div className="flex-1">
                <div className="max-w-(--breakpoint-xl) mx-auto">
                    {children}
                </div> 
            </div>
            
            <Footer />
        </div>
    )
}

export default Layout;