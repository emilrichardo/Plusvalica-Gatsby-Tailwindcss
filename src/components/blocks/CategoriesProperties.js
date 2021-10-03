import React from 'react';
import HeadLine from './HeadLine';
import icon1 from '../../assets/icons/habitacionales.jpg';
import icon2 from '../../assets/icons/industriales.jpg';
import icon3 from '../../assets/icons/comerciales.jpg';
import icon4 from '../../assets/icons/hoteleros.jpg';
import icon5 from '../../assets/icons/agroindustriales.jpg';
import icon6 from '../../assets/icons/terrenos.jpg';
const CategoriesProperties = () => {
    return ( <>
    <section>
        <div className="container container mx-auto px-5 md:px-44 py-4 md:py-24">
            <HeadLine size="xl">EXPANDE TUS HORIZONTES</HeadLine>
            <p className="mb-8 leading-relaxed text-base md:text-2xl md:max-w-xl">Accede a un inventario de inversión con una gama de más de 5 categorías de propiedades internacionales.</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center mt-20">
                <div className="text-center">
                    <img className="mx-auto w-3/4 mb-5" src={icon1} /> 
                    <h4 className="text-lg">Habitacionales</h4>
                </div>   
                <div className="text-center">
                    <img className="mx-auto w-3/4 mb-5" src={icon2} /> 
                    <h4 className="text-lg">Industriales</h4>
                </div>   
                <div className="text-center">
                    <img className="mx-auto w-3/4 mb-5" src={icon3} /> 
                    <h4 className="text-lg">Comerciales</h4>
                </div>   
                <div className="text-center">
                    <img className="mx-auto w-3/4 mb-5" src={icon4} /> 
                    <h4 className="text-lg">Hoteleros</h4>
                </div>  
                <div className="text-center">
                    <img className="mx-auto w-3/4 mb-5" src={icon5} /> 
                    <h4 className="text-lg">Agro-industriales</h4>
                </div>   
                <div className="text-center">
                    <img className="mx-auto w-3/4 mb-5" src={icon6} /> 
                    <h4 className="text-lg">Terrenos</h4>
                </div>          
            
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-5 md:mt-24">
                <div className="border-2 border-gray-200 py-10 mt-5 px-5 rounded border-opacity-25 flex justify-around flex-col md:flex-row">
                    <h4 className="text-primary text-2xl uppercase">Compra</h4>
                    <span className="text-3xl opacity-25 hidden md:inline-block">/</span>
                    <div>
                        <p className="text-xl">Unidades privativas</p>
                        <p className="text-xl">Fracciones inmobiliarias</p>
                    </div>
                </div>
                <div className="border-2 border-gray-200 py-10 mt-5 px-5 rounded border-opacity-25 flex justify-around flex-col md:flex-row">
                    <h4 className="text-primary text-2xl uppercase">Renta</h4>
                    <span className="text-3xl opacity-25 hidden md:inline-block">/</span>
                    <div>
                        <p className="text-xl">Larga estancia</p>
                        <p className="text-xl">Corta estancia</p>
                    </div>
                </div>
                 
            </div>

        </div>
        
        
    </section>
    </> );
}
 
export default CategoriesProperties;