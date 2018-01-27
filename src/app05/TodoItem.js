import React, { Component } from 'react';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.id,
			title: props.todo.title,
			complete: props.todo.complete
		};

		this.toggleComplete = this.toggleComplete.bind(this);
	}

	toggleComplete(event) {
		this.setState(prevState => ({
      complete: !prevState.complete
		}));
		
		this.props.update(this.state);
	}

  render() {
    return (
      <li className={ this.state.complete ? 'completed' : '' } >
			  <div className="view">
				  <input className="toggle" type="checkbox" 
							onChange={ this.toggleComplete }
							checked={ this.state.complete } />
				  <label>{ this.state.title }</label>
				  <button className="destroy"></button>
			  </div>
			  <input className="edit" />
		  </li>
    );
  }
}
