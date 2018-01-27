import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
			  <div className="view">
				  <input className="toggle" type="checkbox" value={ this.props.id } />
				  <label>{ this.props.title }</label>
				  <button className="destroy"></button>
			  </div>
			  <input className="edit" />
		  </li>
    );
  }
}