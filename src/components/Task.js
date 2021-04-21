import React from 'react'

const Task = ({ task, stretchFeatures, deleteTask }) => {
    const handleDelete = () => {
        deleteTask(task)
    }

    return (
        <div className='task'>
            <div className='label'>{task.category}</div>
            <div className='text'>{task.text}</div>
            { stretchFeatures ? <button className='delete' onClick={handleDelete}>X</button> : null}
        </div>
    )
}

export default Task