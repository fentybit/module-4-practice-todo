import React from 'react';
import './App.css';
import { CATEGORIES } from './data';
import CategoriesContainer from './containers/CategoriesContainer';
import TasksContainer from './containers/TasksContainer';

class App extends React.Component {
  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    selectedCategory: 'All',
    stretchFeatures: false
  }

  selectCategory = (selectedCategory) => {
    this.setState({ selectedCategory })
  }

  filteredTasks = (selectedCategory) => {
    if (selectedCategory === 'All') {
      return this.state.tasks
    } else {
      return this.state.tasks.filter(task => task.category === selectedCategory)
    }
  }

  handleOnClick = (e) => {
    if (e.target.className === "toggle off") {
      e.target.className = "toggle on"
      e.target.innerText = "Stretch features enabled"
      this.setState({ stretchFeatures: !this.state.stretchFeatures })
    } else {
      e.target.className = "toggle off"
      e.target.innerText = "Stretch features disabled"
      this.setState({ stretchFeatures: !this.state.stretchFeatures })
    }
  }

  addTask = (newTask) => {
    this.setState({ tasks: [...this.state.tasks, newTask] })
  }

  deleteTask = (selectedTask) => {
    this.setState({ tasks: this.state.tasks.filter(task => task !== selectedTask) })
  }

  render() {

    return (
      <div className="App">
        <button className="toggle off" onClick={this.handleOnClick}>Stretch features disabled</button>

        <h2>My tasks</h2>
        <CategoriesContainer categories={CATEGORIES} selectCategory={this.selectCategory} selectedCategory={this.state.selectedCategory} />
        <TasksContainer tasks={this.filteredTasks(this.state.selectedCategory)} stretchFeatures={this.state.stretchFeatures} addTask={this.addTask} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;