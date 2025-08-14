
interface NavbarItem {
    href: string;
    children: React.ReactNode;
}

interface Props {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}


const NavbarSidebar = ({items, open, onOpenChange}: Props) => {
  return (
    <div>
        navbar-sidebar
    </div>
  )
}

export default NavbarSidebar;