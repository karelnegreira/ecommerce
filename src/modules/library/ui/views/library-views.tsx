import Link from "next/link"
import { ArrowLeftIcon } from 'lucide-react';

export const LibraryView = () => {

    return (
        <div className="min-h-screen bg-white"> 
                <nav className="p-4 bg-[#F4F4F0] w-full border-b">
                    <Link prefetch href="/" className="flex items-center gap-2">
                        <ArrowLeftIcon className="size-4"/>
                        <span className="text font-medium">Continue shopping</span>
                    </Link>
                </nav>
                
        </div>
    )
    
}