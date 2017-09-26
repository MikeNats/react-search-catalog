import axios from 'axios';

import { 
	REQUEST_IN_PROGRESS,
	REQUEST_SUCCESS,
	REQUEST_FAIL 
} from '../../actions/fetchProducts/fetchProducts';

import { 
	fetchProducts,
	defaultState 
} from './fetchProducts';
  

describe('fetchProducts Reducer', () => {

    describe('Action type is not supported ', () => {

    	it('should return the default state', () => {
    		expect(fetchProducts()).toEqual(defaultState);
    	});
    });

    describe('Action type is REQUEST_FAIL ', () => {

    	it('should return state with error.status attribute set to true', () => {
    		expect(fetchProducts(defaultState, { type: REQUEST_FAIL}).error.status).toEqual(true);
    	});
    	it('should return state with isFetching attribute set to false', () => {
    		expect(fetchProducts(defaultState, { type: REQUEST_FAIL}).isFetching).toEqual(false);
    	});
    });

    describe('Action type is REQUEST_IN_PROGRESS ', () => {

    	it('should return state with error.status attribute set to false', () => {
    		expect(fetchProducts(defaultState, { type: REQUEST_IN_PROGRESS}).error.status).toEqual(false);
    	});
    	it('should return state with isFetching attribute set to true', () => {
    		expect(fetchProducts(defaultState, { type: REQUEST_IN_PROGRESS}).isFetching).toEqual(true);
    	});  	
    });

    describe('Action type is REQUEST_SUCCESS ', () => {

    	it('should return state with error.status attribute set to false', () => {
    		expect(fetchProducts(defaultState, { type: REQUEST_SUCCESS}).error.status).toEqual(false);
    	});
    	it('should return state with isFetching attribute set to false', () => {
    		expect(fetchProducts(defaultState, { type: REQUEST_SUCCESS}).isFetching).toEqual(false);
    	});  
    	it('should return new state', () => {

    		expect(fetchProducts({}, { type: REQUEST_SUCCESS, products: ['data']}).data).toEqual(['data']);
    	}); 	
    });
});