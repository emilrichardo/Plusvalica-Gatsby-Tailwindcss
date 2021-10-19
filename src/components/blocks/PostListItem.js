import React from 'react';
import { Link } from 'gatsby'

const PostListItem = ({post}) => {
    return ( 
        <article className="mt-14 mb-14" key={post.id} >        
          <Link className="text-primary no-underline" to={`/${post.slug}/`}>
          <h2 className="text-2xl md:text-4xl">{post.title}</h2> 
          </Link>
          
          <small>
            {post.date} - posted by {post.author.name}
            <Link to={`/author/${post.author.slug}`}>
              {post.author.name}
            </Link>
          </small>
        
        
          <div
            className="mt-2 text-md"
            dangerouslySetInnerHTML={{
              __html: post.excerpt
            }}
          />
      </article>
    );
}
 
export default PostListItem;