import React from 'react';
import Button from '../Button';
import { StaticImage } from 'gatsby-plugin-image';
import HeadLine from './HeadLine';
const contentMedia = () => {
    
    return ( <>
    <section className=" body-font">
        <div className="container mx-auto flex px-5 md:px-24 py-4 md:py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-xl lg:w-full w-2/3 md:w-1/2  md:order-2 text-center"
                 data-sal="slide-up"
                 data-sal-duration='300'
                 data-sal-delay="100"
                 data-sal-easing="ease"
            >
                <StaticImage 
                src="../../assets/phone.svg"
                className=" rounded mx-auto -mt-40 md:mt-0 mb-10 md:mb-0" 
                alt="phone" 
                />
                
            </div>
            <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <HeadLine size="md">COMIENZA AL INSTANTE</HeadLine> 
                <p className="mb-8 leading-relaxed text-base md:text-xl">Plusvalica es la primer plataforma de su tipo, con un sistema de trabajo inteligente que te abre las posibilidades de comenzar o potencializar tu negocio inmobiliario.</p>
                <div className="flex justify-center">
                    <Button href="https://plusvalica.com.mx/register/admin?locale=en"variant="primary">Registrarme</Button>
                </div>
            </div>
            
        </div>

        <div className="container mx-auto flex px-5 md:px-16 py-8 md:py-24 md:flex-row flex-col items-center">            
            <div className=" md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center order-2 md:order-1"
            data-sal="slide-left"
            data-sal-duration='300'
            data-sal-delay="200"
            data-sal-easing="ease"
            >               
                <StaticImage 
                src="../../assets/smart.jpg"
                placeholder="../../assets/placeholder.svg"
                alt="smart" 
                />
                <HeadLine className="text-primary font-bold mt-10" size="md">Alcanza tus objetivos</HeadLine> 
                <p className="mb-8 leading-relaxed text-base md:text-xl">Desarrollamos un sistema de trabajo inteligente que te permite aumentar exponencialmente tus resultados.</p>
                <p className="mb-8 leading-relaxed text-base md:text-xl " >Accedes a más de +10 categorías de recursos, perfectos para el cierre efectivo de negocios.</p>
                
            </div>
            <div className="lg:max-w-xl lg:w-full w-full md:w-1/2  "
             data-sal="slide-right"
             data-sal-duration='300'
             data-sal-delay="100"
             data-sal-easing="ease"
            >               
                <StaticImage 
                src="../../assets/man-laptop.jpg"
                placeholder="../../assets/placeholder.svg"
                className=" rounded mx-auto -mt-40 md:mt-0 mb-10 md:mb-0" 
                alt="man" 
                />
            </div>            
        </div>

        <div className="container mx-auto flex px-5 md:px-16 md:pr-0 py-8 md:py-24 md:flex-row flex-col items-center"> 
            <div className="  w-full md:w-1/2   md:order-2"
             data-sal="slide-left"
             data-sal-duration='300'
             data-sal-delay="200"
             data-sal-easing="ease"
            >
                <StaticImage 
                src="../../assets/woman-laptop.jpg"
                placeholder="../../assets/placeholder.svg"
                className="object-cover object-center rounded mx-auto   mb-10 md:mb-0 "
                alt="woman" 
                />               
            </div>            
            <div className=" md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center"
            data-sal="slide-right"
            data-sal-duration='300'
            data-sal-delay="100"
            data-sal-easing="ease"
            >
                <StaticImage 
                src="../../assets/desarrollo.jpg"
                placeholder="../../assets/placeholder.svg"
                alt="desarrollo" 
                />                
                <HeadLine className="text-primary font-bold mt-10" size="md">¿Qué es más Desarrollo?</HeadLine> 
                <p className="mb-8 leading-relaxed text-base md:text-xl">Es la escuela de negocios integral de Plusvalica que te ofrece las herramientas de aprendizaje más avanzadas y completas para desarrollar tus habilidades personales, profesionales y directivas, las que te llevarán a tener una carrera exitosa, libertad financiera y así; ser dueño de tu tiempo y tu propio negocio.</p>
                
            </div>
                       
        </div>

    </section>
     </>);
}
 
export default contentMedia;