import { Category } from "@/payload-types"
import { CustomCategory } from "../types";
import { CategoryDropdown } from "./category-dropdown"


interface CategoriesProps {
    data: CustomCategory[];
}

export const Categories = ({data}: CategoriesProps) => {
    //console.log({data}, 'TEST TO FIND THE BUG');
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


