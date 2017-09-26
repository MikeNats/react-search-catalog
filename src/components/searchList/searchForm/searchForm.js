'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../common/inputField/inputField';
import Button from '../../common/button/button';

/**
 * Presentational component for Search form
 */
export default  class SearchForm extends React.Component {
	constructor(props) {
		super(props);
	}

	/*
	* Search Header Html
	**/	
	render() {
		return(<form>	
  <legend> { this.props.title } </legend>

  <InputField 
    placeholder={this.props.placeholder} 
    className={this.props.className} 
    onUserInput={this.props.onUserInput}
    type={this.props.type} 
    debounceTime={this.props.debounceTime} />		
			
			</form>);
	}
}

SearchForm.PropTypes = {
	title        : PropTypes.string.isRequired,
	placeholder  : PropTypes.string.isRequired,
	onChange     : PropTypes.func.isRequired,
	className    : PropTypes.string.isRequired,
	type         : PropTypes.string.isRequired,
	time         : PropTypes.string.isRequired,
}
