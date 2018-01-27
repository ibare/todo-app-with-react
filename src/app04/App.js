/**
 * 어플리케이션 상태 만들고 전달하기
 * - 컴포넌트 반복하기
 */
import React, { Component } from 'react';
import Header from './Header';
import Todos from './Todos';
import Statusbar from './Statusbar';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  newTodo(value) {
    const todos = this.state.todos;

    todos.push(value);

    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header newTodo={ this.newTodo.bind(this) } />
          <Todos todos={ this.state.todos } />
          <Statusbar />
        </section>
        <Footer />
      </div>        
    );
  }
}

export default App;
