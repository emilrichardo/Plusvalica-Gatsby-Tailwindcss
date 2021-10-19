import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import { Link } from 'gatsby';
import { useMenuQuery } from '../../hoocks/useMenuQuery';
import { Logo } from '../Logo';
import { VscMenu  } from "react-icons/vsc";
 
const Header = ({ handleOverlayMenu }) => {
    const {menu } = useMenuQuery();

    const [scrolled, setScrolled] = useState(false);
    // change state on scroll
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 10;
          if (isScrolled !== scrolled) {
            setScrolled(!scrolled);
          }
        };
    
        document.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
          // clean up the event handler when the component unmounts
          document.removeEventListener('scroll', handleScroll);
        };
      }, [scrolled]);
    

   
    return ( 
    <header> 
      <div className={`  ${scrolled ? " bg-opacity-90 bg-light  " : " bg-opacity-0 bg-dark  "} " fixed body-font top-0 w-full transition-all duration-500 ease-in-out z-50 " `}>
        <div className={`${scrolled ? "py-3" : " py-5 "} container mx-auto flex justify-between px-8  items-center `}>
            <Link to="/" className="flex title-font font-medium items-center mb-0">
              <Logo className={scrolled ? "w-2/3 md:w-40  transition-all duration-500 ease-in-out" : "w-2/3 md:w-auto"} logoColor={scrolled ? "black" : "#ffff"}  />
            </Link>
            <Navigation menu={menu.menuItems.nodes} scrolled={scrolled} />
            <button className={scrolled ? "text-2xl text-dark md:hidden" : "text-2xl md:hidden" }onClick={handleOverlayMenu} ><VscMenu/></button>
        </div>
        </div>   
    </header> );
}
 
export default Header;