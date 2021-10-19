import React from 'react';
import { GatsbyImage} from "gatsby-plugin-image"
import HeadLine from './Headline';
const Hero = ({title,image,date,excerpt}) => {
     
     return ( 
    <section className="relative h-screen  -mt-14 text-center flex flex-column  items-center justify-center">
        <div className="z-10">  
                 
            <HeadLine size="xxl" >{title}</HeadLine>
            <p className="md:text-2xl tracking-widest">{date ? date : "(Agente Inversionista Plusvalica)"}</p>             
        </div>
        <GatsbyImage         
          image={image} 
          alt="hero"
          style={{position: "absolute"}}
            className="w-full h-screen absolute opacity-20"
           imgClassName="absolute inset-0  w-full h-screen  z-0 object-cover object-center"            
        />  
             
    </section>
    );
}
 
export default Hero;