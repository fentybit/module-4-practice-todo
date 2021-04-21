import React from 'react';
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'

class TasksContainer extends React.Component {
    render() {
        const { tasks, stretchFeatures, addTask, deleteTask } = this.props

        return (
            <div className="tasks">
                <h5>Tasks</h5>
                {(stretchFeatures) ? <TaskForm addTask={addTask} /> : null}
                {tasks.map(task => <Task key={task.text} task={task} stretchFeatures={stretchFeatures} deleteTask={deleteTask} />)}
            </div>
        )
    }
}

export default TasksContainer;