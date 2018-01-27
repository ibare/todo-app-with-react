/**
 * 어플리케이션 상태 만들고 전달하기
 * - 상태 디자인
 * - 하위 컴포넌트에서의 상태 변화
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

  createTodo(title) {
    return {
      title,
      complete: false
    };
  }

  onNewTodo(title) {
    const todos = this.state.todos;

    todos.push(this.createTodo(title));

    this.setState({ todos });
  }

  onUpdate(updateTodo) {
    const todos = this.state.todos;
    const newTodos = todos.map((todo, idx) => {
      if (idx === updateTodo.id) {
        todo.complete = updateTodo.complete;
      }

      return todo;
    });

    this.setState({ 
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header newTodo={ this.onNewTodo.bind(this) } />
          <Todos todos={ this.state.todos } update={ this.onUpdate.bind(this) } />
          <Statusbar todos={ this.state.todos } />
        </section>
        <Footer />
      </div>        
    );
  }
}

export default App;
