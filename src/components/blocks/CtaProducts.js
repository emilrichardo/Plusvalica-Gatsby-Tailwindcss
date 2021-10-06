import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';
const CtaProducts = () => {
    return ( <>
    <div className="container mx-auto px-5 md:px-16 py-10 md:py-44 relative md:flex items-center">
        <StaticImage
        src="../../assets/team.jpg"
        className="md:w-1/2 left-0 top-0 object-cover object-center md:h-100  transition-all" 
            />
        
        <div className="caption md:w-3/5 md:relative md-right-0 md-left-auto  md:pl-24">
            <h2 className="text-primary text-2xl mt-4 md:text-4xl">Crecemos en comunidad</h2>
            <p className="md:text-xl my-2">Formá parte una comunidad de inversionistas enfocados en potencializar la economía colaborativa en la industria de los bienes raíces por medio de herramientas tecnológicas.</p>
            <Button href="https://plusvalica.com.mx/register/admin?locale=en" variant="primary text-center" className="mt-5 w-full md:w-auto">Ver propiedades</Button>
        </div>
       
    </div>
    </> );
}
 
export default CtaProducts;