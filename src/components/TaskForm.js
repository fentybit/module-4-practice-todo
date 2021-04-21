import React from 'react'

class TaskForm extends React.Component {
    state = {
        text: '',
        category: 'Code'
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            text: this.state.text,
            category: this.state.category
        }
        this.props.addTask(newTask)
        this.setState({
            text: '',
            category: 'Code'
        })
    }

    render() {
        return (
            <form className="new-task-form" onSubmit={this.handleOnSubmit}>
                <input name="text" type="text" placeholder="New task details" onChange={this.handleOnChange} value={this.state.text} />
                <select name="category" onChange={this.handleOnChange} value={this.state.category}>
                    <option value='Code'>Code</option>
                    <option value='Food'>Food</option>
                    <option value='Money'>Money</option>
                    <option value='Misc'>Misc</option>
                </select>
                <input type="submit" value="Add task" />
            </form>
        )
    }
}

export default TaskForm