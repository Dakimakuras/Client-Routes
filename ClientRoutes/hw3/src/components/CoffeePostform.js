import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/CoffeepostActions';

class CoffeePostform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            roast: '',
            countryoforigin: '',
            
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.brand]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            brand: this.state.brand,
            roast: this.state.roast,
            countryoforigin: this.state.countryoforigin,
            
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Post your favorite coffee</h1>
                <div>{}</div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>brand</label>
                        <br />
                        <input type="text" name="brand" onChange={this.onChange} value={this.state.name} />
                    </div>
                    <br />
                    <div>
                        <label>roast</label>
                        <br />
                        <input type="text" name="roast" onChange={this.onChange} value={this.state.roast} />
                    </div>
                    <br />
                    <div>
                        <label>countryoforigin</label>
                        <br />
                        <input type="text" name="countryoforigin" onChange={this.onChange} value={this.state.countryoforigin} />
                    </div>
                    <br />
                    
                    <button type="submit" onClick={this.buttonHandler}>Post!</button>
                </form>
            </div>
        )
    }
}

CoffeePostform.propTypes = {
    createPost: PropTypes.func.isRequired 
}

export default connect(null, { createPost })(CoffeePostform);