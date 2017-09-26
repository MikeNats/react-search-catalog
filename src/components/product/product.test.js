import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import Product from './product';
import WarningMessage from '../common/warningMessage/warningMessage';
import {
  Link
} from 'react-router-dom'
 
let productsMockData = {
	"isFetching": false,
    "error": { status: false, message: '' },
    "data": [{
	    "image": "https://business.bt.com/content/dam/bt/business/mobile/samsung/galaxy-s8-plus/170321_mobile_samsung_galaxyS8plus_black_front_SML.jpg/jcr:content/renditions/cq5dam.web.320.320.jpeg",
	    "capacities": ["64GB"],
	    "upfront": 8.33,
	    "monthly": 66.0,
	    "handset_name": "Samsung Galaxy S8+",
	    "banner_text": "OUT NOW",
	    "metaDescription": "With best in class security, enterprise solutions, support and product ecosystem, Samsung bridges the needs of the workplace and the realities of our increasingly connected world.",
	    "colours": [{
	        "key": "Midnight Black",
	        "value": "#000000"
	    }] 
	}]
}
	  
describe('Produt', () => {
	let component;
 
	describe('renders', () => {

		it('(Snapshot)', () => {	 
			component = shallow(<Product   
				products = { productsMockData } /> );

	  		expect(component).toMatchSnapshot(); 
		}); 

	 	describe('Error on fetching product details', () => { 
	 		beforeEach(() => {
				productsMockData.error.status = true;
				productsMockData.error.message = 'Error message';

				component = shallow(<Product   
				products = { productsMockData } /> );
	 		});

			it('should show WarningMessage component with the relevant error message', () => {

				expect(component.find(WarningMessage).props().children[1]).toBe('Error message')
			});

			it('should show Link component', () => {

				expect(component.find(Link).exists()).toBe(true);
			});
	  	});
	  	describe('Products data are on fetching stage', () => {
	 		beforeEach(() => {
				productsMockData.error.status = false;
				productsMockData.error.message = '';
				productsMockData.isFetching = true

				component = shallow(<Product   
				products = { productsMockData } /> );
	 		});

	 	    it('should show image loader', () => {

				expect(component.find('img').exists()).toBe(true);				
				expect(component.find('img').props().src).toBe('./assets/img/loader.svg');				
			});	
	  	});
	  	describe('Request success and products details fetched', () => {
	 		beforeEach(() => {
				productsMockData.isFetching = false
				component = shallow(<Product   
				products = { productsMockData } /> );
	 		});

	 		it('should show h2 with product name details', () => {

				expect(component.find('h2').props().children[1]).toBe(productsMockData.data[0].handset_name);
			});	
	 		it('should show product image', () => {

				expect(component.find('img').props().src).toBe(productsMockData.data[0].image);
				expect(component.find('img').props().alt).toBe(productsMockData.data[0].handset_name);
			});	
			it('should show Upfront const', () => {
 
				expect(component.find('.contentContainer li').nodes[0].props.children[1]).toBe(productsMockData.data[0].upfront);
			});	
			it('should show Monthly const', () => {

				expect(component.find('.contentContainer li').nodes[1].props.children[1]).toBe(productsMockData.data[0].monthly);
			});
			it('should show list of the product capabilities', () => {
				
				expect(component.find('.capacities li').props().children[1]).toBe(productsMockData.data[0].capacities[0]);			
			});
		    it('should show product description', () => {

		    	expect(component.find('p').props().children[1]).toBe(productsMockData.data[0].metaDescription);			
			});	
			it('should show back button', () => {

				expect(component.find(Link).exists()).toBe(true);
			});		
	  	});
	  	describe('Request success but no products found', () => {
	 		beforeEach(() => {
				productsMockData.isFetching = false;
				productsMockData.data = [];

				component = shallow(<Product   
				products = { productsMockData } /> );
	 		});

	 	    it('should show back button', () => {

				expect(component.find(Link).exists()).toBe(true);
			});	
	  	});
	}); 
});
