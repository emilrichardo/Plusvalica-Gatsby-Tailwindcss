import React,  { useState }  from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TabButton from './TabButton';
import HeadLine from './HeadLine';
const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };

  

    const tab_content ={
        inactive: 'content hidden mb-8 transition-all h-0 transition-all duration-500 ease-in-out ',
        active:'content  active-content block mb-8 md:absolute md:top-64 transition-all duration-500 ease-in-out h-auto',
    }


    return ( <>


   
    

     <div className="container mx-auto px-5 md:px-16 py-10 md:py-34 relative md:min-h-screen">

        {toggleState === 3  ? 
          <StaticImage src="../../assets/bono-productividad.jpg" 
          className=" hidden md:block absolute w-1/2 right-24 top-40 max-h-full  transition-all  " 
          imgClassName="hidden md:block"

          style={{position: "absolute"}}
        />
        :
        <StaticImage src="../../assets/joven.jpg" 
          className=" hidden md:block absolute w-1/2 right-0 top-0 object-cover object-center max-h-full  opacity-50 filter grayscale transition-all " 
          imgClassName="hidden md:block"

          style={{position: "absolute"}}/>
        }
      
       <h4 className="text-4xl mb-5 md:hidden">Bonos</h4>  
      <div className="block-tabs grid grid-cols-1 md:grid-cols-4  gap-4">
         <TabButton             
            state={toggleState === 1 && "active"}
            onClick={() => toggleTab(1)}
            >
                <span className="opacity-80">Bono por </span><span className="md:block font-semibold">Venta directa</span>
         </TabButton>
         <div
          className={toggleState === 1 ? tab_content.active: tab_content.inactive}
        >
            <div className="md:w-1/2 md:pr-24">
                <HeadLine size="md" className=" mt-6  upparcase text-bold">GANA EL 11% DE BONO  POR CADA VENTA DIRECTA</HeadLine>
                <p className="md:text-2xl">Cada persona que invitas a Plusvalica y realiza una compra, te genera un bono del 11% sobre el BV de la propiedad, que se verá reflejado de inmediato en tu oficina virtual.</p>
            </div>
         
        </div>
         <TabButton             
            state={toggleState === 2 && "active"}
            onClick={() => toggleTab(2)}
            >
                <span className="opacity-80">Bono por</span> <span className="md:block font-semibold">opcionar</span> 
         </TabButton>
         <div
          className={toggleState === 2 ? tab_content.active: tab_content.inactive}
        >
             <div className="md:w-1/2 md:pr-24">
                <HeadLine size="md" className=" mt-6  upparcase text-bold">GANA EL 11% DE BONO  POR OPCIONAR</HeadLine>
                <p className="md:text-2xl">Multiplica tus oportunidades generando un bono adicional del 11% al opcionar propiedades previamente verificadas por el equipo de Plusvalica.</p>
                <small className="opacity-80 mt-10 block">* Este porcentaje está calculado sobre el BV que se le asigna a cada propiedad o producto</small>
            </div>
        </div>
         <TabButton             
            state={toggleState === 3 && "active"}
            onClick={() => toggleTab(3)}
            >
                <span className="opacity-80">Bono por</span> <span className="md:block font-semibold">productividad</span> 
         </TabButton>
         <div
          className={toggleState === 3 ? tab_content.active: tab_content.inactive}
        >
          <div className="md:w-1/2 md:pr-24">
                <HeadLine size="md" className=" mt-6  upparcase text-bold">GANA EL 22% DE BONO  POR PRODUCTIVIDAD</HeadLine>
                <h4 className="md:text-2xl text-primary">Trabaja de manera inteligente</h4>
                <p className="md:text-2xl">Es la oportunidad perfecta para desarollar un equipo de trabajo que genere resultados de alto impacto.</p>
                <p className="md:text-2xl mt-4">Este bono se genera diariamiente sobre un sistema binario que te paga sobre el BV empatado.</p>
                <small className="opacity-80 mt-10 block">* Este bono se calcula a las 00:00 (GMT-4) Hora de Nueva York y se refleja diariamente.</small>

              
                <StaticImage
                src="../../assets/bono-productividad.jpg"
                alt="bonos productividad"
                 />
                <div className="rounded bg-dark100 py-5 px-10 mt-5">
                 <h4 className="text-primary font-bold uppercase">Ejemplo de BONO DE PRODUCTIVIDAD</h4>
                   <h5>Volumen empatado:</h5> 
                   22,000 x 22 % = $4,840 USD
                 </div>


            </div>
        </div>
         <TabButton             
            state={toggleState === 4 && "active"}
            onClick={() => toggleTab(4)}
            >
                 <span className="opacity-80">Bono por</span> <span className="md:block font-semibold">liderazgo</span> 
         </TabButton>
         <div
          className={toggleState === 4 ? tab_content.active: tab_content.inactive}
        >
         <div className="md:w-1/2 md:pr-24">
                <HeadLine size="md" className=" mt-6  upparcase text-bold">GANA EL 22% DE BONO DE LIDERAZGO</HeadLine>
                <h4 className="md:text-2xl text-primary">Trabajar en equipo, multiplica los resultados.</h4>
                <p className="md:text-2xl">Todas las ganancias que tu equipo obtenga diariamente, Plusvalica te genera un 22% adicional sobre el bono de productividad del sistema binario.</p>
            

            </div>
        </div>
      
       
       
      </div>

   
    </div>
    </> );
}
 
export default Tabs;
