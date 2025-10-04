import Footer from "./footer";
import {Navbar} from "./navbar";
import { SearchFilters } from "./search-filter";

interface Props {
    children: React.ReactNode;
}
 
 const Layout = ( { children }: Props) => {
   return (
     <div className="flex flex-col min-h-screen">
        <Navbar />
        <SearchFilters />
        <div className="flex-1 bg-[#F4F4F0]">
          {children}
        </div>
        <Footer />
     </div>
   )
 }
 
 export default Layout
 