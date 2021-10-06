import React, {useState, useEffect} from 'react';
import { Logo } from './Logo';
import Button from './Button';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby"


const Header = () => {
    // determined if page has scrolled and if the view is on mobile
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

    const colorLinks = {
         effect: " mr-5 text-light hover:text-primary purple-700  uppercase tracking-widest cursor-pointer ",
         default : " mr-5 text-dark hover:text-primary purple-700  uppercase tracking-widest cursor-pointer ",
    }
  
    return (
        <header 
        className={`
            ${scrolled ? " bg-opacity-90 bg-light  " : " bg-opacity-0 bg-dark  "}
            " fixed body-font    w-full transition-all duration-500 ease-in-out z-50 "
        `}
         >
    
            <div className={`${scrolled ? "py-3" : " py-5 "} container mx-auto flex px-5  items-center `}>
                <Link to="/" className="flex title-font font-medium items-center mb-0">
                <Logo className={scrolled ? "w-2/3 md:w-40  transition-all duration-500 ease-in-out" : "w-2/3 md:w-auto"} logoColor={scrolled ? "black" : "#ffff"}  />
                </Link>
                <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-sm justify-center">
                    <Link onClick={() => scrollTo('#plannegocio')} className={scrolled ? colorLinks.default : colorLinks.effect} >Plan de negocios</Link>
                    <Link onClick={() => scrollTo('#ticketsinversion')} className={scrolled ? colorLinks.default : colorLinks.effect}>Tickets</Link>            
                </nav>
                <Button href="https://plusvalica.com.mx/"   variant="primary" size="sm">Login</Button>      
            
            </div>
        </header>
    );
  };
  
  export default Header;

