// CodeVolution V16
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        
        // Ternary Operator approach
        return(
            this.state.isLoggedIn ? (
            <div> Welcome Apoorv</div>
            ) :(
                <div> Welcome Guest</div>
            )
        )

        //Using variable approach
        // let message
        // if(this.state.isLoggedIn)
        //     message = <div>Welcome Apoorv</div>
        // else
        //     message = <div>Welcome Guest</div>
        // return(
        //     <div>{message}</div>
        // )

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Apoorv</div>
        //     )
        // }else{
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
    }
}

export default UserGreeting
