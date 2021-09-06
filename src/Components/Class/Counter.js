import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('Call back Value', this.state.count)
        })

        console.log(this.state.count)
    }
    incrementFive() {
        this.state()
        this.state()
        this.state()
        this.state()
        this.state()
    }

    render() {
        return (
            <div>
                <h2>this is count {this.state.count}</h2>
                <button onClick={() => this.increment()}>Increment</button>
                {/* <button onClick={() => this.incrementFive()}>Increment</button> */}
            </div>
        )
    }
}
