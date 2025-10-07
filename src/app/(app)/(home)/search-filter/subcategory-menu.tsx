
interface SubcategoryMenuProps {
    category: any;
    isOpen: boolean;
    position: { top: number, left: number}
}

export const SubcategoryMenu = ({ category, isOpen, position }: SubcategoryMenuProps) => {
    if (!isOpen || !category.subcategories || category.subcategories.length === 0) {
        return null;
    }

    const backgroundColor = category.color || "#F5F5F5";

    return (
        <div
            className="fixed z-100"
            style={
                {
                    top: position.top, 
                    left: position.left, 
                }
            }
        >
            {/* Invisible bridge to maintain hover */}
            <div className="h-3 w-60"/>
            <div 
                style={{backgroundColor}}
                className="w-60 text-black rounded-md overflow-hidden 
                            border shadow-[4px_4px_0px_0px_rgba(0, 0, 0, 1)]
                            -translate-x-[2px] -translate-y-[2px]
                            ">
                <p>Subcategory menu</p>
            </div>
        </div>
    )
}