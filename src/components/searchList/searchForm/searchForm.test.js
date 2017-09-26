import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import SearchForm from './searchForm';
import InputField from '../../common/inputField/inputField'
import axios from 'axios';


let onUserInput = jest.fn();
	  
describe('SearchForm', () => {
	let component;
 
	describe('renders', () => {
		beforeEach(() => {
			component = shallow(<SearchForm 
					title = 'Search'
					placeholder = 'Filter products' 
					className   = 'searchField'
					onUserInput = { onUserInput }
					type        = "search"
					time		= "600" /> );
		});

		it('(Snapshot)', () => {	 
			
	  		expect(component).toMatchSnapshot(); 
		}); 

	 	describe('form', () => { 

			it('should contain form', () => {

				expect(component.find('form').exists()).toBe(true); 
			});

			describe('legend', () => {

				it('should be rendered with text passed from props ', () => { 

					expect(component.find('legend').text().trim()).toEqual('Search'); 
				});
	 		});	
	 		describe('InputField', () => {
	 			it('should be rendered with attributes populated by props ', () => { 
					
					expect(component.find(InputField).exists()).toBe(true);
					expect(component.find(InputField).length).toBe(1);
					expect(component.find(InputField).props().placeholder).toEqual('Filter products'); 
					expect(component.find(InputField).props().className).toEqual('searchField'); 
					expect(component.find(InputField).props().type).toEqual("search");
					expect(component.find(InputField).props().onUserInput).toEqual(onUserInput); 
				});			
	 		})
	  	});
	}); 
});
