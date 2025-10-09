import { Category } from "@/payload-types"
import { CategoryDropdown } from "./category-dropdown"


interface CategoriesProps {
    data: any;
}

export const Categories = ({data}: CategoriesProps) => {
    //console.log({data}, 'TEST TO FIND THE BUG');
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category: Category) => (
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


