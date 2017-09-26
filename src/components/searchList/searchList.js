'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../../components/searchList/searchResults/searchResults';
import SearchForm from '../../components/searchList/searchForm/searchForm';
import Button from '../../components/common/button/button';
import WarningMessage from '../../components/common/warningMessage/warningMessage';
import {setVisibleProducts} from '../../store/actions/visibleProducts/visibleProducts'
 
const extraVisibleResults = 3; 

/*
* Container component for searchList components
**/
export default  class SearchList extends React.Component {
	constructor(props) {
		super(props);

		//The below instance variables are not added as React `local state` for speed optimisation purposes
		this.maxNumberOfVisibleResults = 2;// counting from 0
		this.searchTerm = '';  
		this.orderByLowToHight = false;
	} 

	/**
	 * When user types a search term. Search term is updated as well as the visible Products
	 * @param  {String} searchTerm 
	 */
	onUserInput(searchTerm) {
		this.searchTerm = searchTerm;
		this.props.dispatch(setVisibleProducts(this.props.products.data, this.maxNumberOfVisibleResults, this.searchTerm ,  this.orderByLowToHight));
	}

	/**
	 * When user clicks on show more button. maxNumberOfVisibleResults is been increased by extraVisibleResults and visible Products are updated
	 * @param  {String} searchTerm 
	 */
	setMaxNumberOfVisibleResults() {
		this.maxNumberOfVisibleResults = this.maxNumberOfVisibleResults + extraVisibleResults
		this.props.dispatch(setVisibleProducts(this.props.products.data, this.maxNumberOfVisibleResults, this.searchTerm,  this.orderByLowToHight))
	}

	/**
	 * When user toggle the button order by. orderByLowToHight value is been toggled and visible Products are updated
	 * @param  {String} searchTerm 
	 */
	toggleOrderBy() {
		this.orderByLowToHight = this.orderByLowToHight === false ? true : false //toggle order	   	                                                                 
		this.props.dispatch(setVisibleProducts(this.props.products.data, this.maxNumberOfVisibleResults, this.searchTerm,  this.orderByLowToHight ))
	}

	/*
	* Render 
	**/
	render() {		
		return (<section className='columns large-12 '>

  <section id='serchHeader'  className='columns'>
    <SearchForm 
      title='Search'
      placeholder='Filter products' 
      className='searchField'
      onUserInput={this.onUserInput.bind(this)}
      type='search'
      time='600' />

    <Button 
      idName={"orderBy"}
      hideClass={this.props.visibleProducts.length === 0 ? 'hide' : null}
      onClick={this.toggleOrderBy.bind(this)} >
      { this.orderByLowToHight ? "Order by Highest Price" : "Order by Low Price"} </Button>
  </section>

  <section id='searchResults' className='columns'>
    {   (() =>  { 
							switch (true) {
								case (this.searchTerm !== '' && this.props.visibleProducts.length === 0): //If no results found
									
									return  <WarningMessage> No results found! </WarningMessage>

								case (this.props.products.error.status): //If error occurs

									return <WarningMessage> { this.props.products.error.message } </WarningMessage>

								default:

									return <section>
  <SearchResults
    visibleResults={this.props.visibleProducts} /> 
											 
  <Button 	
    hideClass={(this.props.visibleProducts.length === 0) ?  "hide" : null}
    onClick={this.setMaxNumberOfVisibleResults.bind(this)} > 
														See More </Button>
										</section>
							}
						})()
					}
  </section>
		</section>);		  
	}
}

SearchList.propTypes = {
	products: PropTypes.object.isRequired,
	visibleProducts: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
}


