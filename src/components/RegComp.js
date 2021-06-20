import React, { PureComponent } from 'react'

class RegComp extends PureComponent {
    render() {
        console.log("********** Reg Component Render **********")
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
