import { CheckoutPageView } from "@/modules/checkout/ui/views/checkout-view";

interface PageProps {
    params: Promise<{slug: string}>;
}

const Page = async ({params}: PageProps) => {
    const {slug} = await params;
    return (
        <CheckoutPageView tenantSlug={slug} />
        //http://localhost:3000/tenants/karelitoshop/checkout
    )
}


export default Page;