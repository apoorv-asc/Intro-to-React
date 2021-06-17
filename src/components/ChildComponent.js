import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* Access the parameter passed in parent component using props*/}
            <button onClick={()=> props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent