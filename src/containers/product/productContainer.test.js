import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import ProductContainer from './productContainer';
jest.mock('../../store/actions/fetchProducts/fetchProducts');
import { fetchProducts } from '../../store/actions/fetchProducts/fetchProducts'
import config from '../../config';
import axios from 'axios';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import  createBrowserHistory  from 'history/createBrowserHistory';
import {
   MemoryRouter as Router,
  withRouter
} from 'react-router-dom'
const initialState = { 
	fetchProducts: {
		isFetching: false,
	    error: { status: 200, message: '' },
	    data: [] 
	},
	dispatch: function(){}
},
match = {
	params : {
		id : '1'
	}
},
middlewares = [thunk],
mockStore = configureStore(middlewares),
store = mockStore(initialState);
	  
 
describe('(Container) productContainer', () => { 
	let component;
  
	it('renders correctly (Snapshot)', () => {	
		component = shallow(<ProductContainer store = {store} />);
 
  		expect(component).toMatchSnapshot();
	});    
 
	it('should connect `products` to props', () => {	
		component = shallow(<ProductContainer store = {store} />); 

  		expect(component.props()).toHaveProperty("products");
  		expect(component.props().products).toEqual(initialState.fetchProducts)
  	});
  
 
	it('should triger async action `fetchProducts`', () => {	
  		 store.dispatch =  jest.fn();
  
  		 component = mount(<Router><ProductContainer 
  		 	store =  {store}
  		 	match = { match }
  		 	/></Router>);

       	expect(fetchProducts).toHaveBeenCalled();
        expect(fetchProducts).toHaveBeenCalledWith(`/api/${match.params.id}.json`);
  	});

});
