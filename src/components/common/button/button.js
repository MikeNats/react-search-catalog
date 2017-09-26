import React from 'react';
import {Debounce} from 'react-throttle';
import PropTypes from 'prop-types'


/**
 * Presentational component for button
 */
export default class Button extends React.Component {
	constructor(){
		super();
	}
		
	render() {	
		return (<button  
  id={this.props.idName}
  className={"button " + (this.props.hideClass || '')}
  onClick={this.onUserClick.bind(this)} > 
  { this.props.children }</button>);
	}

	/**
	 * Callback to be invoked when click event occurs
	 */
	onUserClick(event){
    	this.props.onClick(event.target.value);
  	}
}

Button.PropTypes = {
	onClick: PropTypes.func.isRequired
}