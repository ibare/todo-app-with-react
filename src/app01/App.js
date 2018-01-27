/**
 * HTML 구문을 React 구문으로 변경하기
 * https://github.com/facebook/react-devtools
 */
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?"></input>
          </header>
          <section className="main">
            <input className="toggle-all" id="toggle-all" type="checkbox"></input>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list"></ul>
          </section>
          <footer className="footer">
          </footer>
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>        
    );
  }
}

export default App;
