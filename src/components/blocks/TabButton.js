import React from 'react';
import { FaAward } from "@react-icons/all-files/fa/FaAward";
const TabButton = ({className, children, state,  onClick}) => {
    return ( <>
    <button 
    onClick={onClick}
    className={`
    ${className}
    ${state === "active" ? " bg-primary  text-dark " : " bg-dark100 text-light "}
    " rounded relative py-2 md:py-8 px-15 flex  items-center  text-left "
    `} >
        <FaAward className="text-2xl w-16" />
        <h3 className=" text-sm md:text-lg text-bold uppercase tracking-widest leading-6 ">{children} </h3>

        <div className={`
        ${state === "active" ? " bg-primary " : " hidden "}
        " rounded h-5 w-5 transform rotate-45 absolute -bottom-2 left-20 "
        `}></div>
    </button>
        
    </> );
}
 
export default TabButton;