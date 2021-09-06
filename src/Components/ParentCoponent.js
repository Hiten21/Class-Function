import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentCoponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName) {
        alert(`Hello ${this.state.parentName} form ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentCoponent
