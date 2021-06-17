import React from 'react'

function FunctionClick() {

    function clickHandler (){
        console.log("Button Clicked")
    }

    return (
        <div>
            {/* clickHandler() [Function Call] means run the function when the code runs
            clickHandler [Function] means run the function when button is clicked */}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
