import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeadLine from './HeadLine';
const PlanNegocio = () => {
    return ( <>
     
        <div id="plannegocio" className="container relative mt-24 mx-auto px-5 md:px-16 md:pr-0 py-24 md:py-24 md:pb-0 grid  md:grid-cols-2 gap-10 md:overflow-hidden">
            <div>
                <HeadLine size="xl" className="uppercase">Plan de  Negocio</HeadLine>
                <StaticImage
                src="../../assets/best-investment-apps.jpeg"
                style={{position: "absolute"}}
                className="investment rounded mb-5 md:opacity-20  md:absolute inset-x-0 top-0 md:w-full z-0" 
                 />
                
            </div>
            
            <div className="caption md:bg-dark100 md:flex flex-col md:py-24 md:px-32 items-center md:z-10">
                <p className="md:text-xl mb-5">Hemos desarrollado un sistema de trabajo inteligente que te permite aumentar exponencialmente tus resultados.</p>
                <p className="md:text-xl mb-5">El 10%* del valor de la propiedad se convierte en el 100% del negocio comisionable.</p>
                <p className="md:text-xl mb-5">Cada propiedad se le asigna un valor negocio (BV Business Volume) de donde se toman en cuenta las comisiones de los bonos.</p>
           
                <ul className="text-xs opacity-75 mt-20">
                    <li>* Aplican restricciones.</li>
                    <li>** Plusvalica genera un licencia con un costo de 22USD mensuales que se descuentan en automatico, a todos los AIPs de sus ganancias.</li>
                    <li>*** Los usuarios que ingresan como cliente no generan costo mensual.</li>                   
                </ul>            
            </div>
            
        </div>
     
    </> );
}
 
export default PlanNegocio;