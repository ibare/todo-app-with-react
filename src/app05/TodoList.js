import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  onUpdate(updateTodo) {
    this.props.update(updateTodo);
  }

  render() {
    return (
      <ul className="todo-list">
        { this.props.todos.map((todo, idx) => <TodoItem todo={ todo } key={ idx } id={ idx } update={ this.onUpdate.bind(this) } />)}
      </ul>
    );
  }
}