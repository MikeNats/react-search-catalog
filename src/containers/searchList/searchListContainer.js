'use strict'

import React from 'react';
import SearchList from '../../components/searchList/searchList';
import {connect} from 'react-redux';
import {fetchProducts} from '../../store/actions/fetchProducts/fetchProducts'
import config from '../../config'

/*
* Container component for searchList component
**/
class SearchListContainer extends React.Component {
	constructor(props){
		super(props);
	}

	/*
	* Ajax request to fetch products
	**/
	componentWillMount() {
		this.props.dispatch(fetchProducts(config.api.getProducts));
	}

	/* 
	* Render searchList component
	**/
	render() {
		return (<SearchList 
  products={this.props.products} 
  visibleProducts={this.props.visibleProducts}
  dispatch={this.props.dispatch} />);
	}
}

const mapStateToProps = state => ({	
	products: state.fetchProducts,
	visibleProducts: state.visibleProducts
});

export default connect(mapStateToProps)(SearchListContainer)
