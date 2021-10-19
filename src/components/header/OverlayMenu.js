import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from "react-helmet"
import Button from '../Button';
import { Logo } from '../Logo';
import { useMenuQuery } from '../../hoocks/useMenuQuery';
import { VscChromeClose  } from "react-icons/vsc";

const OverlayMenu = ({ menuOpen, callback }) => {
    const {menu} = useMenuQuery();

    const MenuState = {
        show : "h-screen w-screen scale-100 py-4 top-0 ",
        hidden:"h-0 overflow-hidden scale-0 opacity-50 scale-y-105 py-0 top-0 right-0 "

}

    return (
        <div className={`${menuOpen ?MenuState.show : MenuState.hidden } "  px-4 fixed z-50 transition-all  " `}  menuOpen={menuOpen}>

            <Helmet>
                <body className={menuOpen ? " overflow-y-hidden " : " overflow-y-auto "} />
            </Helmet>
             
            <div className="h-full relative mx-auto flex flex-col justify-around  rounded   bg-light bg-opacity-80 text-dark z-50 px-12 py-14">
                <VscChromeClose
                  onClick={callback}
                  role="button"
                  tabIndex="0"
                  onKeyDown={callback}
                 className="absolute right-4 top-4 text-3xl transform  rotate-0 hover:rotate-180 transition-all cursor-pointer hover:scale-125 outline-none" 
                />
                <nav className={menuOpen ?  "flex flex-col mt-14 opacity-100 delay-100" : " flex flex-col mt-14 opacity-0" } >     
                {/* Iteracion de items */}
                {menu.menuItems.nodes.map(menuItem => 
                    !menuItem.parentId && menuItem.cssClasses.includes('btn') 
                    ? (<Button to={menuItem.url} onClick={callback}  className="w-full text-center mt-4" variant="primary" size="lg"onKeyDown={callback}>{menuItem.label}</Button>) 
                    : (<Link to={menuItem.url}  onClick={callback}  key={menuItem.id} className={`${menuItem.cssClasses.join(' ') } " text-dark text-xl  mt-4 "` }  onKeyDown={callback}>{menuItem.label}</Link>) 
            
                )}
                {/* Iteracion de items */}

                </nav> 
                <Logo className="w-2/3 mx-auto" logoColor="#000"/>

            </div>
        </div>
     );
}
 
export default OverlayMenu;