"use client";

import { ChangeEvent } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


interface PriceFilterProps {
    minPrice?: string | null;
    maxPrice?: string | null;
    onMinPriceChange: (value: string) => void;
    onMaxPriceChange: (value: string) => void;
}




export const formatAsCurrency = (value: string) => {
  const numericVaue = value.replace(/[^0-9.]/g, "");

  const parts = numericVaue.split(".");
  const formattedValue = parts[0] + (parts.length > 1 ? "." + parts[1]?.slice(0, 2): "");

  if (!formattedValue) return "";

  const numberValue = parseFloat(formattedValue);

  if (isNaN(numberValue)) return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "USD", 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 2, 
  }).format(numberValue);
};

export const PriceFilter = ({
    minPrice, 
    maxPrice, 
    onMinPriceChange, 
    onMaxPriceChange
}: PriceFilterProps) => {
    return (
        <div className="flex flex-col gap-2">
            
        </div>
    )
}


