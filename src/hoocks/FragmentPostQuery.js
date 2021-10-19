
import { graphql } from "gatsby"
export const FragmentPostQuery = graphql`
fragment PostListFields on WpPost{
    id
    title
    excerpt
    uri
    date(formatString: "MMMM DD, YYYY")
    slug   
    author {
        node {
          avatar {
            url
          }
          name
          nickname
          uri
          slug
          firstName
          email
        }
      }
  }
`