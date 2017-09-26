import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import SearchResults from './searchResults';
import SearchResultItem from '../searchResultItem/searchResultItem'
import axios from 'axios';


const props = {
	visibleProducts: [{
	    "image":  "https://business.bt.com/content/dam/bt/business/mobile/samsung/galaxy-s8/170320_mobile_samsung_galaxyS8_black_front_SML.jpg/jcr:content/renditions/cq5dam.web.320.320.jpeg",
	    "monthly": 48.0,
	    "handset_name": "Samsung Galaxy S8",
	    "page_path": "/product/galaxy-s8"
	},{ 
	    "image": "https://business.bt.com/content/dam/bt/business/mobile/apple/iphone-7-plus/161130_mobile_apple_iphone7plus_silver_front_SML.jpg/jcr:content/renditions/cq5dam.web.320.320.jpeg",
	    "capacities": ["32GB", "128GB", "256GB"],
	    "monthly": 53.0,
	    "handset_name": "Apple iPhone 7 Plus",
	    "page_path": "/product/iphone-7-plus"
	}]
};
	  
describe('SearchResults', () => {
	let component;
 
	describe('renders', () => {
		beforeEach(() => {
			component = shallow(<SearchResults
			 	visibleResults = { props.visibleProducts } /> );
		});

		it('(Snapshot)', () => {	 
			
	  		expect(component).toMatchSnapshot(); 
		}); 

	 	describe('ul', () => { 

			it('should contain ul', () => {

				expect(component.find('ul').exists()).toBe(true); 
			});

			describe('SearchResultItem', () => {

				it('should map props.visibleProducts to SearchResultItem', () => {

					component.find(SearchResultItem).forEach((ele, i) => {
						expect(ele.props().name).toEqual(props.visibleProducts[i].handset_name);
						expect(ele.props().price).toEqual(props.visibleProducts[i].monthly);
						expect(ele.props().src).toEqual(props.visibleProducts[i].image);
						expect(ele.props().href).toEqual(props.visibleProducts[i].page_path);						
					}); 

					expect(component.find(SearchResultItem).length).toEqual(2); 
				});

	 		});	
	  	});
	}); 
});
