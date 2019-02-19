import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <>
        <div>
          <input type="text"/>
          <button>提交</button>
        </div>
        <ul>
          <li>学习react</li>
          <li>学习英语</li>
        </ul>
      </>
    );
  }
}

export default TodoList;
