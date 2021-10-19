import React, { useState } from "react"
import Header from "../components/header/Header"
import Footer from "../components/Footer"
import OverlayMenu from '../components/header/OverlayMenu';
const Layout = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleOverlayMenu = () => setMenuOpen(prev => !prev);
  
    return ( 
    <div className="h-screen">     
        <Header  handleOverlayMenu={handleOverlayMenu}  />
        <OverlayMenu  menuOpen={menuOpen} callback={handleOverlayMenu} />
        <div className="main-content pt-14 z-10 overflow-x-hidden">
            {children}
        </div>        
        <Footer/>
    </div> );
    
}
 
export default Layout;