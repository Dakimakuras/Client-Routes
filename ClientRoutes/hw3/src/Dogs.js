import React, { Component } from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';


class Dogs extends Component {

    render() {
        return (
            < div >
                <Postform />
                <Posts />
                
            </div>
        );
    }
}

export default Dogs;