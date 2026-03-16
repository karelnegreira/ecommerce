import { Footer } from "@/modules/tenants/ui/components/footer";
import { Navbar } from "@/modules/tenants/ui/components/navbar";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{slug: string}>;
}

const Layout = ({children, params}: LayoutProps) => {
    return (
        <div className="min-h-screen bg-[#FFB6C1] flex flex-col">
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;