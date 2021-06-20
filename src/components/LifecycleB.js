import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Apoorv'
        }
        console.log('LifeCycle B constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log("LifeCycle B DidMount")
    }

    shouldComponentUpdate(){
        console.log('LifeCycle B shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle B getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('LifeCycle B componentDidUpdate');
    }

    render() {
        console.log('LifeCycle B render')
        return (
            <div>
                <h1>LifeCycle B Methods</h1>
            </div>
        )
    }
}

export default LifecycleB