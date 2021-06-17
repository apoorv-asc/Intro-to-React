import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Love</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'hello', className: 'dummyClass'},
        React.createElement('h1',null,'Hello Love')
    )
}

export default Hello