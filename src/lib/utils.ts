import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateTenantUrl(tenantSlug: string) {
  return `/tenants/${tenantSlug}`;
};

export function formatCurrency(value: number | string) {
  return new Intl.NumberFormat("en-US", {
      style: "currency", 
      maximumFractionDigits: 2, 
      currency: "USD"
  }).format(Number(value));
}