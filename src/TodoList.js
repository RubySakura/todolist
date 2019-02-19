import React, { Component } from 'react';
import './style.css';
import TodoItem from './TodoItem';

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
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} className='input' />
          <button onClick={this.handleButtnClick}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return (<li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>);
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
        </ul>
      </>
    );
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleButtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default TodoList;
