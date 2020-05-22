import React from 'react';
import {connect} from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }
   this.props.createPost(post);

  }

  render(){
    const {title, body} = this.state;
    return (
      <div>
        <h3>Add Post</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <lable>Title: </lable>
            <br/>
            <input type="text" name="title" value={title} onChange={this.onChange}/>
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br/>
            <textarea type="text" name="body" value={body} onChange={this.onChange}/>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {createPost})(Postform)