import React from 'react';

const sizes  = {
    default:'  md:text-2xl text-2xl mb-4',    
    md:'  md:text-4xl text-2xl mb-5',    
    lg:'  md:text-6xl text-2xl mb-6',    
    xl:'  md:text-7xl text-4xl mb-7',    
    xxl:'  md:text-9xl text-4xl mb-7',    
}

const HeadLine = ({children, size, level, className}) => {
    return ( 
        <>
       
        <h2 className={`
            ${className} 
            ${sizes[size] || sizes.default}
             font-normal title-font tracking-wide
            `} >
            
            {children}
        
        </h2>
    
        </> );
}
 
export default HeadLine;