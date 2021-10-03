import React from 'react';


const Ticket = ({iconticket,precio,enganche,bv,legend,mensualidad}) => {
    return ( <>
    <div className="bg-dark100 rounded text-center py-10 px-4 md:px-10 mt-6">
        <img className="md:w-1/2 mx-auto -mt-16 mb-6" src={iconticket} />
        <div className="border-2 border-gray-700 rounded px-2 py-2 text-left">
            <h6 className="text-primary">Precio</h6>
            <h4 className="text-lg">${precio} <small>USD</small></h4>
        </div>
        <div className="border-2 border-gray-700 rounded px-2 py-2 text-left mt-4">
            <h6 className="text-primary">Enganche</h6>
            <h4 className="text-lg">${enganche} <small>USD</small></h4>
        </div>
        <div className="border-2 border-gray-700 rounded px-2 py-2 text-left mt-4">            
            <h4 className="text-lg">{bv} BV</h4>
        </div>
        <p className="text-primary mt-5">{legend}</p>
        <p className="mt-4 font-semibold">{mensualidad}</p>
    </div>
    </> );
}
 
export default Ticket;