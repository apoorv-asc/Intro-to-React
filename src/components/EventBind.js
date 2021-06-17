import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             message: "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this)
        // Added so that 
    }

    clickHandler(){
        this.setState({
            message:'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* 1st Approach : Best Approach Binding in the constructor*/}
                <button onClick={this.clickHandler}>Click</button> 

                {/* 2nd Approach */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* 3rd Approach */}
                {/* <button onClick={() => this.clickHanlder()}>Click</button> */}
            </div>
        )
    }
}

export default EventBind