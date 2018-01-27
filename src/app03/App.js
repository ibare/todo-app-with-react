/**
 * 컴포넌트와 컴포넌트와 커뮤니케이션
 * - 이벤트 핸들러
 * https://www.ctheu.com/2015/02/12/how-to-communicate-between-react-components/
 */
import React, { Component } from 'react';
import Header from './Header';
import Todos from './Todos';
import Statusbar from './Statusbar';
import Footer from './Footer';

class App extends Component {
  newTodo(value) {
    console.log('new todo: ', value);
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header newTodo={ this.newTodo.bind(this) } />
          <Todos />
          <Statusbar />
        </section>
        <Footer />
      </div>        
    );
  }
}

export default App;
