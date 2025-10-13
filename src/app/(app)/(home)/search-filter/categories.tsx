"use client";

import { useEffect, useRef, useState } from "react";
import { CustomCategory } from "../types";
import { CategoryDropdown } from "./category-dropdown"


interface CategoriesProps {
    data: CustomCategory[];
}

export const Categories = ({data}: CategoriesProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const meassureRef = useRef<HTMLDivElement>(null);
    const viewAllRef = useRef<HTMLDivElement>(null);

    const [visibleCount, setVisibleCount] = useState(data.length);
    const [isAnyHovered, setIsAnyHovered] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const activeCategory = "All";

    useEffect(() => {
        
    }, [])

  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category) => (
          <div key={category.id}>

              <CategoryDropdown  
                  category={category}
                  isActive={false}
                  isNavigationHovered={false}
              />
          </div>
        ))}
      </div>
    </div>
  );
};


