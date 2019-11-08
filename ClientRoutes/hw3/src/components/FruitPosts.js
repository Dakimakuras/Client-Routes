import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import { fetchPosts } from '../redux/actions/postActions';


class FruitPosts extends Component {
      constructor(props){
          super(props);
          this.state= {
              posts:[]
          }
      }
    


    render() {
        const fruitItems = this.state.posts.map(post => (
            <div key={post._id}>
                <h6>{post.type}</h6>
                <div >
                    <p>ID: {post._id}</p>
                    <p>Color: {post.color}</p>
                    <p>Quantity: {post.quantity}</p>
                </div>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {fruitItems}
                
            </div>
        )
    }
}



export default FruitPosts;