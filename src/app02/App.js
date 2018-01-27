/**
 * 커다란 컴포넌트 작게 나누고 결합하기
 */
import React, { Component } from 'react';
import Header from './Header';
import Todos from './Todos';
import Statusbar from './Statusbar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <section className="todoapp">
          <Header />
          <Todos />
          <Statusbar />
        </section>
        <Footer />
      </div>        
    );
  }
}

export default App;
