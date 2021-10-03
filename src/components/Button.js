import React from 'react';

const sizes ={
    default:'text-lg py-2 px-8',
    sm:'text-md py-1 px-4',
}

const variants ={
    default:'text-dark bg-primary hover:bg-primary-dark',
    primary:'text-dark bg-gradient-to-r from-primary-dark via-primary to-primary-light  hover:from-primary',
}
const Button = ({children, className , size, variant}) => {
    return ( 
    <button className={`
    ${className}
    ${sizes[size] || sizes.default}
    ${variants[variant] || variants.default}
    inline-flex font-normal items-center border-0 focus:outline-none rounded uppercase font-medium
    `}>
        {children}
    </button> );
}
 
export default Button;