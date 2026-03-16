
interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{slug: string}>;
}

const Layout = ({children, params}: LayoutProps) => {
    return (
        <div className="min-h-screen bg-[#AA336A] flex flex-col">
            {children}
        </div>
    )
}

export default Layout;