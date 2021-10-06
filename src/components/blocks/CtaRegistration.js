import React from 'react';
import Button from '../Button';
import logo3d from '../../assets/iso3d.svg'
const CtaRegistration = () => {
    return ( <>
    <div className="container mx-auto px-5 md:px-16 py-10 md:py-44  ">
        <div className="bg-dark100 px-5 md:px-16 py-10 md:py-24 rounded relative filter drop-shadow-lg">
            <img className="w-screen md:w-2/5  relative md:absolute md:right-10 md:left-auto -inset-4 top-0 md:-top-10" alt="logo3d"  src={logo3d} />
            <h3 className="text-2xl md:text-3xl text-center  md:text-left tracking-wider">Forma parte de la comunidad Plusvalica.</h3>
            <Button href="https://plusvalica.com.mx/register/admin?locale=en" className="mt-4 w-full md:w-auto" variant="primary">Registrarse</Button>
        </div>
        
    </div>
    </> );
}
 
export default CtaRegistration;