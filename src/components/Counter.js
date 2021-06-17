import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment(){
        // Calls to this.setState are sync. Therefore value printed in
        // console.log just outside setState is one less than that shown 
        // infront of Count
        { /* this.setState({
            count: this.state.count+1
        }, () =>
            {console.log(this.state.count)
        }) */}
        // Conclusion : If we are running some function just after setState
        // do this in arrow function

        this.setState(prevState =>({
            count : prevState.count+1
        }),() =>{
            console.log(this.state.count)
        })

    }

    incrementFive(){
        this.increment();this.increment();
        this.increment();this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick= {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
