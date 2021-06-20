import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureCom from './PureCom'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Apoorv'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Apoorv'
            })
        },2000)
    }
    render() {
        console.log("********** Parent Component Render **********")
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureCom name={this.state.name}></PureCom>
            </div>
        )
    }
}

export default ParentComp
