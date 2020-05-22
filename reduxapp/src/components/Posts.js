import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends React.Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render(){
    return (
      <div>
        <h3>Posts</h3>
        {this.props.posts.map((post, index) => {
          return (
            <div key={index}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)