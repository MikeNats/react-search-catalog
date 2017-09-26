import React from 'react';
import PropTypes from 'prop-types'
import SearchResultItem from '../searchResultItem/searchResultItem' ; 


/**
 * Presentational component for Search results
 */
export default class SearchResults extends React.Component {
	constructor(props){
		super(props);
	}

	resultsItems(){
		return this.props.visibleResults.map((result) => 
  <SearchResultItem 
    className='product'
    key={result.handset_name}
    name={result.handset_name}
    price={result.monthly}
    src={result.image}
    href={result.page_path} />
			)
	}

	render() {	 
		return (<ul> { this.resultsItems() } </ul>);		 	
	}
}

SearchResults.PropTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
}