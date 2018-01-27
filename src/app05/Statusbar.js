import React, { Component } from 'react';

export default class Statusbar extends Component {
  render() {
    let leftItemCount = this.props.todos.filter(todo => todo.complete).length;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{ leftItemCount } { leftItemCount <= 1 ? 'item' : 'items' } left</strong>
        </span>
      </footer>
    );
  }
}