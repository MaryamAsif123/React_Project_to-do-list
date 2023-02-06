import React, { Component } from 'react';
import Task from '../Task/Task';

class TaskList extends Component {
    
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.tasks.map((item, index) => (
          <Task 
          key={index} 
          showTask={item} 
          deleteTask={this.props.deleteTask} 
          index={index}
          /> 
        ))
        }
      </div>
    );
  }
}

export default TaskList;
