import React from 'react';
import {Debounce} from 'react-throttle';
import PropTypes from 'prop-types'


/**
 * Presentational component for input element
 */

export default class InputField extends React.Component {
	constructor(props){
		super(props);	
	}
	/**
	 * Callback to be invoked when click event occurs
	 */	
	handleChange(event){
    	this.props.onUserInput(event.target.value)
  	}

	render() {
		return (
  <Debounce 
    time={this.props.debounceTime} 
    handler='onChange'>
    <input
      className={this.props.className}
      placeholder={this.props.placeholder}  
      onChange={this.handleChange.bind(this)} 
      type={this.props.type}
				    />
  </Debounce>
		);
	}
}

InputField.PropTypes = {
	placeholder : PropTypes.string.isRequired,
	onChange    : PropTypes.func.isRequired,
	className   : PropTypes.string.isRequired,
	type        : PropTypes.string.isRequired,
	time        : PropTypes.string.isRequired,
}