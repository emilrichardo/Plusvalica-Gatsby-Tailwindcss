import React from 'react' 
import { graphql } from 'gatsby' 
import Helmet from 'react-helmet' 
import PostList from '../components/PostList' 


const Category = props => {
    const { data, pageContext } = props
    const { edges: posts, totalCount } = data.allWpPost
    const { title: siteTitle } = data.site.siteMetadata
    
    const { name: category } = pageContext
     
  
    return (
      <>
        <Helmet title={`${category} | ${siteTitle}`} />        
        <PostList posts={posts} title={category} count={totalCount} />
      </>
    )
  }
  
  export default Category
  
  export const pageQuery = graphql`
    query CategoryPage($slug: String!) {
      site {
        siteMetadata {
          title
        }
      }
      allWpPost(        
        filter: { categories: {nodes: {elemMatch: {slug: {eq: $slug }}}}}
      ) {
        totalCount
        edges {
          node {
            ...PostListFields
          }
        }
      }
    }

  
   
  `