
interface Props {
    children: React.ReactNode;
}
 
 const Layout = ({children}: Props) => {
   return (
     <div>
        <nav className="bg-red-500 text-white w-full p-2">
            <p>Navbar</p>
        </nav>
        {children}
     </div>
   )
 }
 
 export default Layout
 