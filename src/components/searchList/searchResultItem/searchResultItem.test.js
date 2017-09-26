import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import SearchResultItem from './searchResultItem';
import {
  Link
} from 'react-router-dom'
import axios from 'axios';


const props = {
    "image": "https://business.bt.com/content/dam/bt/business/mobile/samsung/galaxy-s7/161122_mobile_samsung_galaxyS7_black_front_SML.jpg/jcr:content/renditions/cq5dam.web.320.320.jpeg",
    "capacities": ["32GB"],
    "upfront": 0.0,
    "monthly": 43.0,
    "handset_name": "Samsung Galaxy S7",
    "banner_text": null,
    "page_path": 'testurl',
    "metaDescription": "With best in class security, enterprise solutions, support and product ecosystem, Samsung bridges the needs of the workplace and the realities of our increasingly connected world.",
    "colours": [{
        "key": "Black",
        "value": "#000000"
    }]
};
	  
describe('SearchResultItem', () => {
	let component;

	describe('renders', () => {
		beforeEach(() => {
			component = shallow(<SearchResultItem 
				className = 'product'
				key   	  = { props.handset_name }
				name  	  = { props.handset_name }
				price     = { props.monthly }
				src       = { props.image }
				href      = { props.page_path } />);
		});

		it('(Snapshot)', () => {	 
			
	  		expect(component).toMatchSnapshot(); 
		}); 

		describe('li', () => { 
			it('should contain li', () => {

				expect(component.find('li').exists()).toBe(true); 
			});


			describe('Link', () => {

				it('should show a Link Rauter component', () => {

					expect(component.find(Link).exists()).toBe(true); 
				});

			    it('should inherits attributes values from `props`', () => {

					expect(component.find('.product').exists()).toBe(true); 
					expect(component.find({ to: props.page_path }).exists()).toBe(true); 
				});

				describe('img', () => {

					it('should contain img', () => {

						expect(component.find('img').exists()).toBe(true); 
					});

					it('should inherits attributes values from `props`', () => {
	 
						expect(component.find({ alt: props.handset_name }).exists()).toBe(true);
						expect(component.find({ src: props.image }).exists()).toBe(true); 
					});
				});
				describe('h3', () => {

					it('should contain h3', () => {

						expect(component.find('h3').exists()).toBe(true); 
					});

					it('should inherits text from `props`', () => {

						expect(component.find('h3').text().trim()).toEqual(props.handset_name); 
					});
				});
				describe('p', () => {
					it('should contain p', () => {

						expect(component.find('p').exists()).toBe(true); 
					});	
					it('should inherits text from `props`', () => {

						expect(component.find('p').text().includes(props.monthly)).toBe(true); 
					});		
				});
			});	
		});
	}); 
});
