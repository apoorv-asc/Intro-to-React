// Class Component
import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        return (
            <h1> {this.props.name} aka {this.props.heroName}</h1>
        )
    }
}

// Destructing state
// class Welcome extends Component{
//     render(){
//         const {name,heroName} =this.props
//         return (
//             <h1> {name} aka {heroName}</h1>
//         )
//     }
// }

export default Welcome