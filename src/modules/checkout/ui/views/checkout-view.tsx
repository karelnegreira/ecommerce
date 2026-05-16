"use client";

import { toast } from 'sonner';
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../../hooks/use-cart";
import { useEffect } from "react";

interface CheckoutViewProps {
    tenantSlug: string;
}

export const CheckoutPageView = ({tenantSlug}: CheckoutViewProps) => {
    const { productIds, clearAllCarts } = useCart(tenantSlug)

    const trpc = useTRPC();
    const { data, error } = useQuery(trpc.checkout.getProducts.queryOptions({
        ids: productIds
    }));

    useEffect(() => {
        if (!error) return;

        if (error?.data?.code === "NOT_FOUND") {
            clearAllCarts();
            toast.message("Inavlid product found, cart cleared.")
        }
    }, [error, clearAllCarts])

    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    )
}