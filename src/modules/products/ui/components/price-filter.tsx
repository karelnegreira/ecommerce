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

    const handleMinimumPriceChange = (e: ChangeEvent<HTMLInputElement>) => {

        const numericValue = e.target.value.replace(/[^0-9.]/g, "");
        onMinPriceChange(numericValue)
    }

    const handleMaximumPriceChange = (e: ChangeEvent<HTMLInputElement>) => {

        const numericValue = e.target.value.replace(/[^0-9.]/g, "");
        onMaxPriceChange(numericValue)
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <Label className="font-medium text-base">
                    Minimum Price
                </Label>
                <Input
                    type="text"
                    placeholder="$0"
                    value={minPrice ? formatAsCurrency(minPrice) : ""}
                    onChange={handleMinimumPriceChange}
                />

            </div>
            <div className="flex flex-col gap-2">
                <Label className="font-medium text-base">
                    Maximum Price
                </Label>
                <Input
                    type="text"
                    placeholder="inf"
                    value={maxPrice ? formatAsCurrency(maxPrice) : ""}
                    onChange={handleMaximumPriceChange}
                />

            </div>
        </div>
    )
}


