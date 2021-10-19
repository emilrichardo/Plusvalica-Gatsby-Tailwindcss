import React from 'react'
import { Link } from 'gatsby';
import Button from '../Button';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Navigation = ({ menu, scrolled }) => {
    const colorLinks = {
        effect: " mx-5 text-light hover:text-primary purple-700  uppercase tracking-widest cursor-pointer no-underline",
        default : " mx-5 text-dark hover:text-primary purple-700  uppercase tracking-widest cursor-pointer no-underline",
   }
    return ( 
    <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-sm justify-center">     
        {/* Iteracion de items */}
        {menu.map(menuItem => 
            !menuItem.parentId && menuItem.cssClasses.includes('btn') 
            ? <Button className=" mx-5 last:mr-0 "  to={menuItem.url} variant="primary" size="sm"   v-for="item in items">{menuItem.label}</Button> 
            : (<Link to={menuItem.url} key={menuItem.id} className={`${scrolled ? colorLinks.default : colorLinks.effect } ${menuItem.cssClasses.join(' ') }`} >{menuItem.label}</Link>) 
        )}
        {/* Iteracion de items */}

    </nav> );
}
 
export default Navigation;