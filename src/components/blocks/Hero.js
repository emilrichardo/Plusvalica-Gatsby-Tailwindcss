import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
 import {graphql } from 'gatsby'

import HeadLine from './HeadLine';
const Hero = ({data}) => {
    console.log(data)
    return ( 
    <>


    
    <section className="relative h-screen  text-center flex flex-column  items-center justify-center">
        <div className="z-10">
            <HeadLine size="md">Conviertete en un</HeadLine>
            <HeadLine size="xxl" >GLOBAL AIP</HeadLine>
            <p className="md:text-2xl tracking-widest">(Agente Inversionista Plusvalica)</p>
            <h5 className="bg-dark px-5 py-4 mt-5 mx-3 text-sm md:text-lg ">Unete a la comunidad del realestate más grande del mundo, trabaja de manera inteligente.</h5>
            
        </div>
        <StaticImage
            src="../../assets/background-hero.jpg"
            alt="image hero"
            placeholder="blurred"
            layout="fullWidth"
            style={{position: "absolute"}}
            className="w-full h-screen absolute opacity-5"
            imgClassName="absolute inset-0  w-full h-screen  z-0 object-cover object-center"

        />  
             
    </section>
    
    </> );
}
 
export default Hero;

export const query = graphql`
query heroImage{
    file(relativePath: {eq: "background-hero.jpg"}) {
      childImageSharp{
              fluid(maxWidth:2000){
                  ...GatsbyImageSharpFluid
        }
      }
    }
  }
  

`