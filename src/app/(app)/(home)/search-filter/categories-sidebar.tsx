import { CustomCategory } from "../types";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
    Sheet, 
    SheetContent, 
    SheetHeader, 
    SheetTitle
} from '@/components/ui/sheet';
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data: CustomCategory[];
}


export const CategoriesSidebar = ({open, onOpenChange, data}: Props) => {

    const [parentCategories, setParentCategories] = useState<CustomCategory[] | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<CustomCategory | null>(null);

    //if we 
    const currentCategory = parentCategories ?? data ?? [];

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
                style={{ backgroundColor: "white" }}
            >
                <SheetHeader className="P-4 border-b">
                    <SheetTitle>
                        Categories
                    </SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {
                        parentCategories && (
                            <button
                                onClick={() => {}}
                                className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            >
                                <ChevronLeftIcon className="size-4 mr-2"/>
                                Back
                            </button>
                        )}
                    {currentCategory?.map((category) => (
                        <button
                            key={category.slug}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center text-base font-medium cursor-pointer"
                        >
                            {category.name}
                            {category.subcategories && category.subcategories.length > 0 && (
             
                                <ChevronRightIcon className="size-4"/>
                            )}

                        </button>
                    ))}
                </ScrollArea>

            </SheetContent>
        </Sheet>
    )
}