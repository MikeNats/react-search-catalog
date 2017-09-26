import React from 'react';

import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import SearchList from './searchList';
jest.mock('../../store/actions/fetchProducts/fetchProducts');
import { fetchProducts } from '../../store/actions/fetchProducts/fetchProducts'
import config from '../../config';
import SearchResults from './searchResults/searchResults';
import SearchForm from './searchForm/SearchForm';
import WarningMessage from '../common/warningMessage/warningMessage'; 
import Button from '../common/button/button';
import {setVisibleProducts} from '../../store/actions/visibleProducts/visibleProducts'
import axios from 'axios';


const initialState = { 
	visibleProducts: [],
	fetchProducts: {
		isFetching: false,
	    error: { status: 200, message: '' },
	    data: [] 
	},
	dispatch: jest.fn()
}

const middlewares = [thunk]; 
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);
	  
describe('SearchList', () => {
	let component;

	describe('renders', () => {
	let products = [];

		it('(Snapshot)', () => {	 
			component = shallow(<SearchList
				products = {initialState.fetchProducts} 
				visibleProducts = {initialState.visibleProducts}
				dispatch = {initialState.dispatch} />);
	 
	  		expect(component).toMatchSnapshot(); 
		}); 
		describe('onUserInput', () => {
			describe('searchTerm is not matching products', () => {
				beforeEach(() => {
					component = mount(<SearchList
						products = {initialState.fetchProducts} 
						visibleProducts = {initialState.visibleProducts}
						dispatch = {initialState.dispatch} />);
	 
					component.instance().onUserInput('qwerty');
			 		component.update();
				});

				it('should show WarningMessage', () => {	

			  		expect(component.find(WarningMessage).exists()).toEqual(true); 
				});

				it('should hide SearchResults', () => {

					expect(component.find(SearchResults).exists()).toEqual(false);
				});
			});
			describe('searchTerm is matching products', () => {
				beforeEach(() => {
					products = [{
					    "image":  "https://business.bt.com/content/dam/bt/business/mobile/samsung/galaxy-s8/170320_mobile_samsung_galaxyS8_black_front_SML.jpg/jcr:content/renditions/cq5dam.web.320.320.jpeg",
					    "monthly": 48.0,
					    "handset_name": "Samsung Galaxy S8",
					    "page_path": "/product/galaxy-s8"
					}];
					   
					component = shallow(<SearchList
						products = {initialState.fetchProducts} 
						visibleProducts = {initialState.visibleProducts}
						dispatch = {initialState.dispatch} />);
	 
					component.setProps({ visibleProducts: products });
				});

				it('should show SearchResults', () => {
					expect(component.find(SearchResults).exists()).toEqual(true);
				});	
				it('should hide WarningMessage', () => {
					expect(component.find(WarningMessage).exists()).toEqual(false);
				});			
			});
		});
		describe('error on fetching data', () => {
			beforeEach(() => {				
				initialState.fetchProducts.error.status = true;
				component = shallow(<SearchList
					products = {initialState.fetchProducts} 
					visibleProducts = {initialState.visibleProducts}
					dispatch = {initialState.dispatch} />);
			});
			
			it('should hide WarningMessage', () => {
				expect(component.find(WarningMessage).exists()).toEqual(true);
			});

			it('should hide SearchResults', () => {

				expect(component.find(SearchResults).exists()).toEqual(false);
			});
						
		});
		describe('setMaxNumberOfVisibleResults', () => {
			beforeEach(() => {
				initialState.fetchProducts.error.status = false;
				component = shallow(<SearchList
					products = {initialState.fetchProducts} 
					visibleProducts = {initialState.visibleProducts}
					dispatch = {initialState.dispatch} />);
			});

			it('should toggle maxNumberOfVisibleResults', () => {
				let state =  component.instance().maxNumberOfVisibleResults;
				component.instance().setMaxNumberOfVisibleResults();

				expect(component.instance().maxNumberOfVisibleResults).not.toEqual(state);
			});

			it('should show SearchResults', () => {
				component.instance().searchTerm = 'samsung';
				component.instance().setMaxNumberOfVisibleResults();
		 		component.update();

		 		expect(component.find(SearchResults).exists()).toEqual(true);
			});

			it('should hide WarningMessage', () => {
				expect(component.find(WarningMessage).exists()).toEqual(false);
			});		
		});
		describe('toggleOrderBy', () => {
			beforeEach(() => {
				initialState.fetchProducts.error.status = false;
				component = shallow(<SearchList
					products = {initialState.fetchProducts} 
					visibleProducts = {initialState.visibleProducts}
					dispatch = {initialState.dispatch} />);
			});

			it('should toggle orderByLowToHight', () => {
				let state =  component.instance().orderByLowToHight;
				component.instance().toggleOrderBy();

				expect(component.instance().orderByLowToHight).not.toEqual(state);
			});

			it('should show SearchResults', () => {
		 		expect(component.find(SearchResults).exists()).toEqual(true);
			});

			it('should hide WarningMessage', () => {
				expect(component.find(WarningMessage).exists()).toEqual(false);
			});	
					
		});
	});

});
