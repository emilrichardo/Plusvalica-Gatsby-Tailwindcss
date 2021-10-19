
import React from 'react';
import { graphql } from 'gatsby';
import { getImage} from "gatsby-plugin-image"
import Container from '../components/Container';
import Hero from '../components/blocks/Hero';


const WpPostTemplate = ({ data: { wpPost } }) => {
  const { title, content, featuredImage, date, excerpt } = wpPost;
  
 const imageData = featuredImage !== null   && getImage(featuredImage.node.localFile.childImageSharp.gatsbyImageData);  
 
  

  return (
  <div>       
      {imageData && <Hero title={title} date={date} excerpt={excerpt} image={imageData} />}      
      <Container className="mt-24" size="lg">
       
        {!imageData &&  <h1 className="text-2xl md:text-6xl mb-4 md:mb-4" >{title}</h1> }
        {date && !imageData ? <span> {date} </span> : null}  
          <div className="content-wp mt-14" dangerouslySetInnerHTML={{ __html: content }} /> 
      </Container> 
  </div>
  );
};

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMMM YYYY") 
      excerpt
    
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
export default WpPostTemplate;