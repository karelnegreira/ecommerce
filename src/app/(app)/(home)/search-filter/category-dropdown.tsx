import { Button } from "@/components/ui/button";
import { Category } from "@/payload-types";


interface CategoryDropdownProps {
    category: Category;
    isActive?: boolean;
    isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({category, isActive, isNavigationHovered}: CategoryDropdownProps) => {
  return (
    <Button>
        {category.name}
    </Button>
  )
}


