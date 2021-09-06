import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        }
    }
    render() {

        return this.state.loggedIn && <div>Welcome Hiten</div>
// __________________________________________________________________________________________________________________________________
        // return (
        //     this.state.loggedIn ?
        //         (<div>Welcome Hiten</div>) :
        //         (<div>Welcome Guest</div>)
        // )



        // _______________________________________________________________________________________________________________________

        // let message
        // if (this.state.loggedIn) {
        //     message = <div>Welcome Hiten</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return (
        //     <div>{message}</div>
        // )


        // _________________________________________________________________________________________________________


        // if(this.state.loggedIn){
        //     return (

        //         <div>Welcome Hitent</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

    }
}

export default UserGreeting
