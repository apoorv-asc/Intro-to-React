// Class Component use of State
// CodeVolution V10
import React,{ Component } from 'react'

class Message extends Component{

    constructor(){
        super(); // used to call the constructor present in React to run the required functions
        this.state = {
            message : "Welcome visitor"
        }
    }
    
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }

    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message