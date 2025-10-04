import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface Props {
    disabled?: boolean;
}

export const SearchInput = ({disabled}: Props) => {
    return (
        <div className="flex items-center gap-2 w-full">
            <div className="relative w-full">
                <SearchIcon className=""/>
                <Input />
            </div>
        </div>
    )
}