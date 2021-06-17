// Functional Component
import React from 'react'

// @Normal Convention
// function Greet(){
//     return <h1> Hello love</h1>
// }

// @ES6 Convention
const Greet = (props) => {
    console.log(props);
    return (    
        <div>
            <h1>Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
)}


// Destructing props in functional component
// const Greet = ({name,heroName,children}) => {
//     return (    
//         <div>
//             <h1>Hello {name} aka {heroName}</h1>
//             {children}
//         </div>
// )}

export default Greet

// Named Export
// export const Greet =() => <h1>Hello love</h1>
// Here we'll need to export the component with the same name in 
// App.js ie Greet