import React from 'react';
import { Link } from "gatsby"
const sizes ={
    default:'text-lg py-2 px-8',
    sm:'text-md py-1 px-4',
}

const variants ={
    default:'text-dark bg-primary hover:bg-primary-dark',
    primary:'text-dark bg-gradient-to-r from-primary-dark via-primary to-primary-light  hover:from-primary',
}
const Button = ({to,children, className , size, variant}) => {
    return ( 
    <Link 
    to={to} 
    className={`
    ${className}
    ${sizes[size] || sizes.default}
    ${variants[variant] || variants.default}
    inline-flex  items-center border-0 focus:outline-none rounded uppercase font-medium
    `}>
        {children}
    </Link> );
}
 
export default Button;