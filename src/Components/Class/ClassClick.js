import React, { Component } from 'react'

export default class ClassClick extends Component {

    clickHandler() {
        console.log("Click on me")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click on me</button>
            </div>
        )
    }
}
