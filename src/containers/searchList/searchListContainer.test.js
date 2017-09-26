import React from 'react';

import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import SearchListContainer from './searchListContainer';
jest.mock('../../store/actions/fetchProducts/fetchProducts');
import { fetchProducts } from '../../store/actions/fetchProducts/fetchProducts'
import config from '../../config';
import axios from 'axios';

const initialState = { 
	visibleProducts: [],
	fetchProducts: {
		isFetching: false,
	    error: { status: 200, message: '' },
	    data: [] 
	},
	dispatch: function(){}
}


const middlewares = [thunk]; 
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);
	  
 
describe('(Container) SearchListContainer', () => {
	let component;

	it('renders correctly (Snapshot)', () => {	
		component = shallow(<SearchListContainer store={store} />);
 
  		expect(component).toMatchSnapshot();
	});  
 
	it('should connect `products` to props', () => {	
		component = shallow(<SearchListContainer store={store} />);

  		expect(component.props()).toHaveProperty("products");
  		expect(component.props().products).toEqual(initialState.fetchProducts)
  	});

  	it('should connect `visibleProducts` to props', () => {	
		component = shallow(<SearchListContainer store={store} />);

  		expect(component.props()).toHaveProperty("visibleProducts");
  		expect(component.props().visibleProducts).toEqual(initialState.visibleProducts)
  	});

	it('should triger async action `fetchProducts`', () => {	
  		store.dispatch =  jest.fn();
  		component = mount(<SearchListContainer store={ store } />);
	
        expect(fetchProducts).toHaveBeenCalled();
        expect(fetchProducts).toHaveBeenCalledWith(config.api.getProducts);
  	});

});
