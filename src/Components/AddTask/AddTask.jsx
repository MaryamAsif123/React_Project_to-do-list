import React, { Component } from 'react';
import './AddTask.css'
class AddTask extends Component {
  state = {
    inputText: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.ADD(this.state.inputText);
    this.setState({ inputText: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className='input'
          type="text"
          value={this.state.inputText}
          onChange={(event) => this.setState({ inputText: event.target.value })}
        /> &nbsp;
        <button type="submit" className='btn'>Add Task</button>
      </form>
    );
  }
}

export default AddTask;
