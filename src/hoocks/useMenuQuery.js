import { useStaticQuery, graphql } from "gatsby"


export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
        site {
            siteMetadata {
              title
              description
            }
          }
          menu : wpMenu {
            slug
            name
            count
            menuItems {
              nodes {
                label
                path
                parentId
                description
                url
                order
                cssClasses
                target
                id
              }
            }
          }
    }    
  ` )
  
  return data;
}


   