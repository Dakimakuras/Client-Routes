import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';


class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }


    render() {
        const postItems = this.props.posts.map(dog => (
            <div key={dog._id}>
                <h6>{dog.Name}</h6>
                <div >
                    <p>ID: {dog._id}</p>
                    <p>Breed: {dog.Breed}</p>
                    <p>Color: {dog.Color}</p>
                    <p>Age: {dog.Age}</p>
                </div>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                <div>{postItems}</div>
                <button onClick={this.buttonHandler}>Get!</button>
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
}

const mapStatetoProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
})

export default connect(mapStatetoProps, { fetchPosts })(Posts);