import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Poppins } from "next/font/google"
import Link from "next/link";

const poppins = Poppins({
    subsets: ["latin"], 
    weight: ["700"]
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
}

const NavbarItem = ({href, children, isActive} : NavbarItemProps) => {
    return (
        <Button>
            {children}
        </Button>
    );
}

const navbarItems = [
    {href: "/", children: "Home"},
    {href: "/about", children: "About"},
    {href: "/features", children: "Features"},
    {href: "/contact", children: "Contact"},
]

export const Navbar = () => {
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
            funroad
        </span>
      </Link>

      <div className="items-center gap-4 hidden lg:flex">
        {
            navbarItems.map((item) => (
                <NavbarItem key={item.href} {...item}/>
            ))
        }
      </div>
    </nav>
  )
}


