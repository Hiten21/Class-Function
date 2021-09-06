import React, { Component } from 'react'

export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: " welcome in a State Component"
        }
    }
    changeMessage() {
        this.setState({
            message: " You clicked on the button"
        })
    }
    render() {
        return (
            <div>
                <h2>Welcome State{this.state.message}</h2>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

