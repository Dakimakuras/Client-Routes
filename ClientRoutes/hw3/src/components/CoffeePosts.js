import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/CoffeepostActions';


class CoffeePosts extends Component {
    // componentWillMount(){
    //     this.props.fetchPosts();
    // }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }


    render() {
        const postItems = this.props.posts.map(backcoffee => (
            <div key={backcoffee._id}>
                <h6>{backcoffee.brand}</h6>
                <div >
                    <p>brand: {backcoffee.brand}</p>
                    <p>roast: {backcoffee.roast}</p>
                    <p>countryoforigin: {backcoffee.countryoforigin}</p>
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

CoffeePosts.propTypes = {
    CoffeePosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
}

const mapStatetoProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
})

export default connect(mapStatetoProps, { fetchPosts })(CoffeePosts);