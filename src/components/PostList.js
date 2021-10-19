import React from 'react'
import PropTypes from 'prop-types'
import HeadLine from './blocks/Headline'
import Container from './Container'
import PostListItem from './blocks/PostListItem'



export default class IndexPage extends React.Component {
  render() {
    const { posts, title, count } = this.props    
    return (
      <Container size="lg">        
          <div className="content">
            <HeadLine size="xl">{title}</HeadLine>
            <h6>{count}{count === 1 ? " publicacion " : " publicaciones "}</h6>
          </div>
          {posts.map(({ node: post }) => (
            <PostListItem post={post} />
          ))}        
      </Container>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

