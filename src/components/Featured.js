import React from 'react';
import { GatsbyImage} from "gatsby-plugin-image"

const Featured = ({image}) => {
    return ( 
    <>
    <GatsbyImage         
          image={image} 
                
        /> 
    </> 
    );
}
 
export default Featured;