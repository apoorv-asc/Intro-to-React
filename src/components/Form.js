import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments:'',
            topic:'React'
        }
    }
    
    handleUserName = event =>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange = events =>{
        this.setState({
            comments :events.target.value
        })
    }
    handleTopicChange = events =>{
        this.setState({
            topic :events.target.value
        })
    }
    handleSubmit = events =>{
        alert(`${this.state.username}\n${this.state.comments}\n${this.state.topic}`)
        events.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.handleUserName} 
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={this.state.comments} 
                        onChange={this.handleCommentsChange}
                    ></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
