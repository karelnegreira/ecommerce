import { Category } from "@/payload-types"
import { CategoryDropdown } from "./category-dropdown"


interface CategoriesProps {
    data: any;
}

export const Categories = ({data}: CategoriesProps) => {
    console.log({data}, 'TEST TO FIND THE BUG');
  return (
    <div>
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
  );
};


