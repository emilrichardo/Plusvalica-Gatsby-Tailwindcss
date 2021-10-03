import React from 'react';
import background from '../../assets/background-hero.jpg'
import HeadLine from './HeadLine';
const Hero = () => {
    return ( 
    <>
    <section className="relative h-screen  text-center flex flex-column  items-center justify-center">
        <div className="z-10">
        <HeadLine size="md">Conviertete en un</HeadLine>
        <HeadLine size="xxl" >GLOBAL AIP</HeadLine>
        <p className="md:text-2xl tracking-widest">(Agente Inversionista Plusvalica)</p>
        <h5 className="bg-dark px-5 py-4 mt-5 mx-3 text-sm md:text-lg ">Unete a la comunidad del realestate más grande del mundo, trabaja de manera inteligente.</h5>

        </div>

        
        <img alt="hero" className="w-full h-screen opacity-5 z-0 absolute inset-0 object-cover object-center" src={background} />
    </section>
    </> );
}
 
export default Hero;