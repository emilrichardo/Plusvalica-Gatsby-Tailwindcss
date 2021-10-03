import React, {useState, useEffect} from 'react';
import { Logo } from './Logo';
import Button from './Button';

function Header () {


    return ( <>
    <header className=" fixed body-font bg-dark bg-opacity-80   w-full  z-50 "  >
    
        <div className="container mx-auto flex p-5  items-center">
            <a className="flex title-font font-medium items-center mb-0">
            <Logo className="w-2/3 md:w-auto md:w-64" />
            </a>
            <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-sm justify-center">
                <a href="#" className="mr-5 text-light hover:text-primary purple-700  uppercase tracking-widest">Plan de negocios</a>
                <a href="#" className="mr-5 text-light hover:text-primary  uppercase tracking-widest">Tickets</a>            
            </nav>
            <Button className="" variant="primary" size="sm">Login</Button>      
        
        </div>
    </header>
    </> );
}
 
export default Header;