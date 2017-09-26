import React from 'react';
import PropTypes from 'prop-types'
import {
  Route,
  Link
} from 'react-router-dom'
import 'whatwg-fetch';
import WarningMessage from '../common/warningMessage/warningMessage';


/**
 * Presentational component for Product details
 */
export default class Product extends React.Component {
	constructor(props){
		super(props);
	}
 
	render() {
		return this.productPanel();		
	}

	productPanel() {
		switch(true) {
			case(this.props.products.error.status):  //if ajax 404 show error message
			                                         //
				return (<section>
  <WarningMessage> { this.props.products.error.message } </WarningMessage>
  <Link 	to='/'
    className='button back' 
    title='Back' >
							Back </Link> 
					</section>);
			case (!this.props.products.isFetching  && this.props.products.data.length > 0 ):  
							return (<article>
  <div className='columns large-16 contentContainer'>
    <h2>  { this.props.products.data[0].handset_name } </h2>	
  </div>
  <div className='columns large-3 medium-3' >
    <div className='contentContainer'>
      <img 
        alt={this.props.products.data[0].handset_name} 
        src={this.props.products.data[0].image} /> 
    </div>
  </div>
  <div className='columns float-left large-6 medium-6' >
    <div className='contentContainer'>
      <h3>Cost</h3>
      <ul>
        <li>Upfront: { this.props.products.data[0].upfront } £</li>
        <li>Monthly: { this.props.products.data[0].monthly } £</li>
      </ul>
    </div> 
    <div className='contentContainer capacities'>
      <h3>Capacities</h3>
      <ul> { (this.props.products.data[0].capacities || []).map((capacitie) => <li key={capacitie}> {capacitie}</li>) } </ul>
    </div>
    <div className='contentContainer'>
      <p> { this.props.products.data[0].metaDescription } </p>
    </div>

    <Link 	to='/'
      className='button back ' 
      title='Back' >
								Back </Link>
  </div> 
				</article>);
				
			case (this.props.products.data.length === 0) :
			
				return (<Link 	to='/'
  className='button back' 
  title='Back' >
								Back </Link>);
			default:
				
				return	(<img src='./assets/img/loader.svg' />);
	
		}

	}
}

Product.propTypes = {
	products: PropTypes.object.isRequired
}
