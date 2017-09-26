import React from 'react';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/**
 * Presentational component for Search results
 */
export default class SearchResultItem extends React.Component {
	constructor(props){
		super(props);
	} 
 
	render() {	
		return (
  <li>
    <Link 
      tabIndex 
      className={this.props.className} 
      to={this.props.href} >
      <img 
        alt={this.props.name} 
        src={this.props.src} />
							
      <h3> { this.props.name } </h3>
      <p>  { this.props.price } £ </p>
    </Link> 
  </li>
		);
	}
} 

SearchResultItem.propTypes = {
	href: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
}
