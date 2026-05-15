
interface CheckoutViewProps {
    tenantSlug: string;
}

export const CheckoutPageView = ({tenantSlug}: CheckoutViewProps) => {
    return (
        <div>
            {tenantSlug}
        </div>
    )
}