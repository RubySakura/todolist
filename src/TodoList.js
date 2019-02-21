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
    console.log('parent render');
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            className='input'
            ref={(input) => {this.input = input}}
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
    this.setState((prevState) => ({
      inputValue: this.input.value
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


  componentWillMount() {
    console.log('parent componentWillMount');
  }

  componentDidMount() {
    console.log('parent componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('parent componentWillReceiveProps');
}

  shouldComponentUpdate() {
    console.log('parent shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('parent componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('parent componentDidUpdate');
  }
}

export default TodoList;
