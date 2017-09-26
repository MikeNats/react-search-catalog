'use strict'

import React from 'react'; 
import Product from '../../components/product/product';
import {connect} from 'react-redux'; 
import {fetchProducts} from '../../store/actions/fetchProducts/fetchProducts'
import config from '../../config';

/*
* Container component for product component
**/
class ProductContainer extends React.Component {
	constructor(props){
		super(props);
	}

	/*
	* Ajax request to fetch a Product
	**/
	componentWillMount() {
		this.props.dispatch(fetchProducts(`/api/${this.props.match.params.id}.json`));
	}
  
	/*
	* Render product component
	**/
	render() {
		return (<Product products={this.props.products} />);
	}
}
  
const mapStateToProps = state => ({	
	products: state.fetchProducts
});


export default connect(mapStateToProps)(ProductContainer)
