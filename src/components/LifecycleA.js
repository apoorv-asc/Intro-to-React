import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Apoorv'
        }
        console.log('LifeCycle A constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log("LifeCycle A DidMount")
    }

    shouldComponentUpdate(){
        console.log('LifeCycle A shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle A getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                <h1>LifeCycle Methods</h1>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
