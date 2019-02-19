import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleButtnClick = this.handleButtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            className='input'
          />
          <button onClick={this.handleButtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          content={item}
          key={index}
          index={index}
          deleteItem={this.handleDelete}
        />
      )
    })
  }

  handleChange(e) {
    // 此处存在一个疑问，为什么不可以直接使用e
    const value = e.target.value; 
    this.setState((prevState) => ({
      inputValue: value
    }));
  }

  handleButtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }

  handleDelete(index) {
    this.setState((prevState) => {
      const list = [...this.state.list];
      list.splice(index, 1);
      return {list};
    });
  }
}

export default TodoList;
