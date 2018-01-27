import React, { Component } from 'react';
import TodoList from './TodoList';

export default class Todos extends Component {

  render() {
    return (
      <section className="main">
        <input className="toggle-all" id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList todos={ this.props.todos } />
      </section>
    );
  }
}