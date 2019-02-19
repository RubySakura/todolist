import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <button>提交</button>
        </div>
        <ul>
          <li>学习react</li>
          <li>学习英语</li>
        </ul>
      </>
    );
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
}

export default TodoList;
