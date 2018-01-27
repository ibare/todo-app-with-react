import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        { 
          this.props.todos.map( (todo, idx) => <TodoItem title={ todo } key={ idx }/> )
        }
      </ul>
    );
  }
}