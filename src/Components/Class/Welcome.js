import React, { Component } from 'react';

export default class Welcome extends Component {
    render() {
        const{name}=this.props
        return (
            <div>
                <h2>this is a class component{name}</h2>
            </div>
        );
    }
}

//  Welcome;
