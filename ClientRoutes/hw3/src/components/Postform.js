import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            breed: '',
            color: '',
            age: 0,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            name: this.state.name,
            breed: this.state.breed,
            color: this.state.color,
            age: this.state.age,
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Post a new Dog</h1>
                <div>{}</div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name</label>
                        <br />
                        <input type="body" name="name" onChange={this.onChange} value={this.state.name} />
                    </div>
                    <br />
                    <div>
                        <label>Breed</label>
                        <br />
                        <input type="text" name="breed" onChange={this.onChange} value={this.state.breed} />
                    </div>
                    <br />
                    <div>
                        <label>Color</label>
                        <br />
                        <input type="text" name="color" onChange={this.onChange} value={this.state.color} />
                    </div>
                    <br />
                    <div>
                        <label>Age</label>
                        <br />
                        <input type="Number" name="age" onChange={this.onChange} value={this.state.age} />
                    </div>
                    <br />
                    <button type="submit" onClick={this.buttonHandler}>Post!</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired 
}

export default connect(null, { createPost })(Postform);