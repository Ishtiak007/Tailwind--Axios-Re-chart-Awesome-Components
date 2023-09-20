import { useState } from "react";
import Link from "../Link/Link";
import { FaBars,FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'User Profile', path: '/profile/:username' },
      ];      
    return (
        <nav className="text-black  p-6">
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                {
                    open===true ? <FaTimes></FaTimes> : <FaBars></FaBars>
                }           
            </div>
            <ul className={`md:flex duration-1000  absolute md:static ${open?"top-16" : "-top-80"} bg-yellow-300 px-6 py-3 shadow-lg rounded-md font-semibold`}>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;