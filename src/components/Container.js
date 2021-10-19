import React from 'react';
const Container = ({children, className, size}) => {
    const sizes = {
        default : "  ",
        md : " max-w-screen-md px-5 md:px-24 ",
        lg: " max-w-screen-lg px-5 md:px-24 ",
        xl: " max-w-screen-xl px-5 md:px-24 ",
        xxl: " max-w-screen-2xl px-5 md:px-24 ",
    }
    return (
    <div className={`
        container 
        ${" " + className + " "}
        ${sizes[size] || sizes.default}
         mx-auto  py-4 md:py-14
    `}>
        {children}

    </div> );
}
 
export default Container;