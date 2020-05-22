import * as actions from './type';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: actions.FETCH_POSTS,
      payload: posts
    }))
}

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
      type: actions.NEW_POSTS,
      payload: post
    }))
}