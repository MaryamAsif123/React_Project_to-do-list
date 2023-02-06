import React, { Component } from 'react';
import TaskList from '../TaskList/TaskList';
import AddTask from '../AddTask/AddTask';
const tasks=[];
const Local_Storage="tasks";
class Home extends Component {
  state = {
    tasks: []
  };
 componentDidMount(){
  const tasks=localStorage.getItem(Local_Storage)
  if(tasks){
    this.setState({tasks: JSON.parse(tasks)});
  }
 }
 componentDidUpdate(prevState){
  if(prevState.tasks!==this.state.tasks)
  {
    localStorage.setItem(Local_Storage, JSON.stringify(this.state.tasks));
  }
}
 
  addTask = (task) => {
    this.setState(
      { tasks: [...this.state.tasks, task] }
      );
  };
  deleteTask = (task) => {
    let arr= this.state.tasks.filter((i, index) => index !== task)
    this.setState(() => ({
      tasks: arr
    }));
  };
  // complete=(index)=>{
  //   let arr= this.state.tasks.filter((i, index1) => index1 === index)
  //   this.setState((prevState) => ({
  //     backgroundColor: prevState.backgroundColor === "rgb(102, 205, 145)" ? "yellow" : "rgb(102, 205, 145)"
  //   }));
    // this.setState(prevState => ({
    //   backgroundColor: prevState.backgroundColor === "rgb(102, 205, 145)" ? "yellow" : "rgb(102, 205, 145)"
    // }));
    // const element = document.getElementsByClassName('container');
    // element.style.backgroundColor = "red";
  // }
//   deleteItem=(param)=>{ 
//     this.setState(prevState => ({
//         tasks: prevState.tasks.filter(item => item !== param)
//       }));        
//   }; 

  render() {
    return (
      <div>
        <AddTask ADD={this.addTask} />
        <TaskList 
        tasks={this.state.tasks}  
        deleteTask={this.deleteTask}
        />
        {/* <Task deleteTask={this.deleteTask}/> */}
        {/* deleteTask={this.deleteItem} */}
      </div>
    );
  }
}

export default Home;
