
import React from 'react';
import { graphql } from 'gatsby';
import { getImage} from "gatsby-plugin-image"
import Container from '../components/Container';
import Hero from '../components/blocks/Hero';

const WpPageTemplate = ({ data: { wpPage } }) => {
  const { title, content, featuredImage } = wpPage;
  
 const imageData = featuredImage !== null   && getImage(featuredImage.node.localFile.childImageSharp.gatsbyImageData);  
 
  

  return (
  <>       
      {imageData && <Hero title={title}  image={imageData} />}      
      <Container className="mt-24" size="lg">  
      {!imageData &&  <h1 className="text-2xl md:text-6xl mb-4 md:mb-14" >{title}</h1> }
          <div className="content-wp" dangerouslySetInnerHTML={{ __html: content }} /> 
      </Container> 
  </>
  );
};

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      isFrontPage
      featuredImage {
        node {
          altText
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
        }
      }
     
    }
  }
`;
export default WpPageTemplate;