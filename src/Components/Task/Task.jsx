import React, { Component } from 'react';
import './Task.css';
class Task extends Component {
  constructor(props){
    super(props)
    this.state={
      isClicked: false,
    }
  }
  handleDelete = () => {
    this.props.deleteTask(this.props.index);
  };
  completeTask=()=>{
    console.log("in function")
    this.setState({
      isClicked : true

    })
   

  }
  // complete=()=>{
  //   //this.props.complete(this.props.index)
  //   const element = document.getElementsById('hello');
  //   element.style.nbackgroundColor = "red";
  //   element.clr==="green"? element.style.backgroundColor = "red" : "green"
  // }
  render() {
    return (
    <div className={this.state.isClicked ? "con2" : "container"}>
        {this.props.showTask}
        <button className='btnstyle' onClick={this.handleDelete}>
            ⨉
        </button>
        <button className= "btns" onClick={this.completeTask}>
            ✓
        </button>
    </div>
    );
  }
}
export default Task;
