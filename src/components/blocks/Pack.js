import React from 'react';
import Ticket from './Ticket';
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { StaticImage } from 'gatsby-plugin-image';



import ticket1 from "../../assets/tickets/01.png"
import ticket2 from "../../assets/tickets/02.png"
import ticket3 from "../../assets/tickets/03.png"
import ticket4 from "../../assets/tickets/04.png"
import ticket5 from "../../assets/tickets/05.png"

const Pack = () => {
    return ( <>
    <div className=" bg-dark filter drop-shadow-lg border-2 border-gray-800 border-1 flex flex-col md:flex-row  rounded py-6 px-4 mb-12">
        <div className="pack-sidebar text-center w-full md:w-2/6 border-b-2 md:border-b-0  md:border-r-2 border-gray-800 px-3 md:px-10 ">            
            <StaticImage
                src="../../assets/packs/01-agent.png"
                alt="Pack 01"
                className="mx-auto w-1/2 md:w-auto"
            />
            <div className="rounded bg-primary py-1 px-4  text-dark text-center mt-6 font-bold w-auto inline-block "><h5>Afiliate sin costo</h5></div>

            <ul className="text-left py-10 text-sm md:text-lg">
                <li className=" py-2"> <FaCheck className="inline-block mr-4 text-primary"/> Bono Venta directa</li>
                <li className="border-t-2 border-gray-800 py-2 opacity-40"><FaTimes className="inline-block mr-4"/>Bono por opcionar</li>
                <li className="border-t-2 border-gray-800 py-2 opacity-40"><FaTimes className="inline-block mr-4"/>Bono por productividad</li>
                <li className="border-t-2 border-gray-800 py-2 opacity-40"><FaTimes className="inline-block mr-4"/>Bono por liderazgo</li>
            </ul>
        </div>
        <div className="pack-description py-3 md:py-20 px-4 md:px-32">
            <h2 className="text-4xl font-bold uppercase hidden md:block mb-8">Agent</h2>
            <h2 className="text-base lg text-primary md:hidden">Descripción</h2>
            <p className="text-sm md:text-2xl max-w-lg">Cuenta con todas las herramientas necesarias para crecer de manera exponencial y con cimientos solidos de la mano de:</p>
            <div className="flex flex-wrap items-center mt-12">
                <StaticImage
                    src="../../assets/smart.jpg"
                    alt="Smart"
                    className=" w-1/2 md:w-1/3 h-auto "
                    placeholder="blurred"
                />
                <StaticImage
                    src="../../assets/desarrollo.jpg"
                    alt="Desarroll"
                    className=" w-1/2  md:w-1/3 "
                    placeholder="blurred"
                />                
            </div>            
        </div>
    </div>
    <div className=" bg-dark filter drop-shadow-lg border-2 border-gray-800  flex flex-col md:flex-row  rounded py-6 px-4 mb-12">
        <div className="pack-sidebar text-center w-full md:w-2/6 border-b-2 md:border-b-0  md:border-r-2 border-gray-800 px-3 md:px-10 ">
           
            <StaticImage
                    src="../../assets/packs/02-advance.png"
                    alt="Advance"
                    className=" mx-auto w-1/2 md:w-auto "
                    placeholder="blurred"
                />
            <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="border-gray-600 border-2 rounded py-4 px-4 text-left">
                    <h6>Precio</h6>
                    <h4 className="text-2xl">$200 USD</h4>
                </div>
                <div className="border-gray-600 border-2 rounded py-4 px-4 text-left">
                    <h6>BV</h6>
                    <h4 className="text-2xl">200</h4>
                </div>

            </div>

            <ul className="text-left py-10 text-sm md:text-lg">
                <li className=" py-2"> <FaCheck className="inline-block mr-4 text-primary"/> Bono Venta directa</li>
                <li className="border-t-2 border-gray-800 py-2"><FaCheck className="inline-block mr-4 text-primary"/> Bono por opcionar</li>
                <li className="border-t-2 border-gray-800 py-2"><FaCheck className="inline-block mr-4 text-primary"/> Bono por productividad</li>
                <li className="border-t-2 border-gray-800 py-2"><FaCheck className="inline-block mr-4 text-primary"/> Bono por liderazgo</li>
            </ul>
        </div>
        <div className="pack-description py-3 md:py-20 px-4 md:px-32">
            <h2 className="text-4xl font-bold uppercase hidden md:block mb-8">Advance</h2>
            <h2 className="text-base lg text-primary md:hidden">Descripción</h2>
            <p className="text-sm md:text-2xl max-w-lg">Advance es un anticipo del enganche a cualquier ticket, te da acceso al 100% del plan de negocios y hasta $100 USD diarios en el bono de productividad. <br/>
Una vez que hagas el upgrade a los paquetes de inversión desde $500 USD, puedes hacer la compra de fracciones inmobiliaras eligiendo cualquier desarrollo de Plusvalica.</p>

            <small className="opacity-80 mt-10 block">* Su periodo de activación en anticipos será de 12 meses o 5 veces más del valor del anticipo, lo que suceda primero.</small>
            <small className="opacity-80 mt-2 block">** Al pagar el anticipo se agrega una prima por concepto de gastos notariales y administrativos por el 22% del valor del anticipo.</small>
            <small className="opacity-80 mt-2 block">**** La compra del anticipo se considera para el enganche de cualquiera de los ticket de inversión.
</small>

                     
        </div>
    </div>

    <div className=" bg-dark100 filter drop-shadow-lg border-2 border-gray-800  flex flex-col md:flex-row  rounded py-6 px-4 mb-12">
        <div className="pack-sidebar text-center w-full md:w-2/6 border-b-2 md:border-b-0  md:border-r-2 border-gray-800 px-3 md:px-10 ">
            <StaticImage
                src="../../assets/packs/03-tickets.png"
                alt="Tickets"
                className=" mx-auto w-1/2 md:w-auto "
                placeholder="blurred"
            /> 
            <StaticImage
                src="../../assets/packs/03-alltickets.png"
                alt="Tickets All"
                className=" mx-auto w-full md:w-auto mt-2 "
                placeholder="blurred"
            /> 
           
           

            <ul className="text-left py-10 text-sm md:text-lg">
                <li className=" py-2"> <FaCheck className="inline-block mr-4 text-primary"/> Bono Venta directa</li>
                <li className="border-t-2 border-gray-800 py-2"><FaCheck className="inline-block mr-4 text-primary"/> Bono por opcionar</li>
                <li className="border-t-2 border-gray-800 py-2"><FaCheck className="inline-block mr-4 text-primary"/> Bono por productividad</li>
                <li className="border-t-2 border-gray-800 py-2"><FaCheck className="inline-block mr-4 text-primary"/> Bono por liderazgo</li>
            </ul>
        </div>
        <div id="ticketsinversion" className="pack-description py-3 md:py-20 px-4 md:px-32">
            <h2 className="text-4xl font-bold uppercase hidden md:block mb-8">TICKET DE INVERSIÓN</h2>
            <h2 className="text-base lg text-primary md:hidden">Descripción</h2>
            <p className="text-sm md:text-2xl max-w-lg">Los ticket de inversión te dan la opción a convertirte en dueño de un proyecto inmobiliario y multiplicar tus beneficios.
Accedes al 100% del plan de negocio y ya generas beneficios con las rentas proporcionales de tu paquete. </p>

            <small className="opacity-80 mt-10 block">* Su periodo de activación en tickets de inversión será de 24 meses o 20 veces más del valor de su BV personal.
 Lo que suceda primero.</small>
            <small className="opacity-80 mt-2 block">** Se agrega una prima por concepto de gastos notariales y administrativos en el pago del 22% del valor del enganche.
 Esta prima se traslada proporcionalmente al enganche del ticket.</small>
           

                     
        </div>
    </div>

    <div className="tickets grid grid-cols-2  md:grid-cols-5 gap-4 mb-24 mt-24">

        <Ticket 
        iconticket={ticket1}
        precio="5,000" 
        enganche="500" 
        bv="500" 
        legend="Hasta $250 USD diarios en Bono de Productividad."
         mensualidad="Mensualidades desde: $85 USD."
        />

        <Ticket 
        iconticket={ticket2}
        precio="10,000" 
        enganche="1,000" 
        bv="1,000" 
        legend="Hasta $500 USD diarios en Bono de Productividad."
         mensualidad="Mensualidades desde: $150 USD.	"
        />

        <Ticket 
        iconticket={ticket3}
        precio="20,000" 
        enganche="2,000" 
        bv="2,000" 
        legend="Hasta $1,000 USD diarios en Bono de Productividad."
         mensualidad="Mensualidades desde: $300 USD.	"
        />
        <Ticket 
        iconticket={ticket4}
        precio="40,000" 
        enganche="4,000" 
        bv="4,000" 
        legend="Hasta $2,000 USD diarios en Bono de Productividad."
         mensualidad="Mensualidades desde: $600 USD.	"
        />
        <Ticket 
        iconticket={ticket5}
        precio="100,000" 
        enganche="10,000" 
        bv="10,000" 
        legend="Hasta $5,000 USD diarios en Bono de Productividad."
         mensualidad="Mensualidades desde: $1,500 USD.	"
        />
       

       

    </div>

    <div className=" bg-dark filter drop-shadow-lg border-2 border-gray-800  flex flex-col md:flex-row  rounded py-6 px-4 mb-12">
        <div className="pack-sidebar text-center w-full md:w-2/6 border-b-2 md:border-b-0  md:border-r-2 border-gray-800 px-3 md:px-10 ">
            
            <StaticImage
                src="../../assets/packs/04-investor.png"
                alt="Investor"
                className=" mx-auto w-1/2 md:w-auto "
                placeholder="blurred"
            /> 
           

            <ul className="text-left py-10 text-sm md:text-lg">
                <li className=" py-2"> <FaCheck className="inline-block mr-4 text-primary"/> Bono Venta directa</li>
                <li className="border-t-2 border-gray-800 py-2"><FaCheck className="inline-block mr-4 text-primary"/> Bono por opcionar</li>
                <li className="border-t-2 border-gray-800 py-2"><FaCheck className="inline-block mr-4 text-primary"/> Bono por productividad</li>
                <li className="border-t-2 border-gray-800 py-2"><FaCheck className="inline-block mr-4 text-primary"/> Bono por liderazgo</li>
            </ul>
        </div>
        

        <div className="pack-description py-3 md:py-20 px-4 md:px-32">
            <h2 className="text-4xl font-bold uppercase hidden md:block mb-8">Investor</h2>
            <h2 className="text-base lg text-primary md:hidden">Descripción</h2>
            <p className="text-sm md:text-2xl max-w-lg">También puedes obtener una unidad privativa y adquirir un porcentaje del BV personal.<br/>
A cada unidad privativa se le asigna un BV.<br/>
Puedes ganar hasta $5,000 USD diarios por posición de negocio en bono de productividad .</p>

         

                     
        </div>
    </div>
    </> );
}
 
export default Pack;