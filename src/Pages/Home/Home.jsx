import React, { Component } from "react";
import TaskList from "../../Components/TaskList/TaskList";
import AddTask from "../../Components/AddTask/AddTask";
const Local_Storage = "tasks";
class Home extends Component {
  state = {
    tasks: [],
  };
  componentDidMount() {
    const tasks = localStorage.getItem(Local_Storage);
    if (tasks) {
      this.setState({ tasks: JSON.parse(tasks) });
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem(Local_Storage, JSON.stringify(this.state.tasks));
    }
  }
  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };
  deleteTask = (task) => {
    let arr = this.state.tasks.filter((i, index) => index !== task);
    this.setState(() => ({
      tasks: arr,
    }));
  };
  render() {
    return (
      <div>
        <AddTask ADD={this.addTask} />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default Home;
