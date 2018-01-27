import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.onCreate = this.onCreate.bind(this);
  }

  onCreate(event) {
    if (event.which === 13) {
      this.props.newTodo(this.textInput.value);
      this.textInput.value = '';
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?"
          ref={ input => { this.textInput = input }} 
          onKeyDown={ this.onCreate } autoFocus={ true } />
      </header>
    );
  }
}