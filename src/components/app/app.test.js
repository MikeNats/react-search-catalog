import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import nock from 'nock'
import thunk from 'redux-thunk';

import SearchListContainer from '../../containers/searchList/searchListContainer'
import App from './app'
  
const initialState = {
	products: { 
		products:[],
		error: {
			status: 200,
			message: ''
		},
		isFetching: false
	}
}

const middlewares = [thunk]; 
const mockStore = configureStore(middlewares);
const store = mockStore(initialState)

describe('(Component) App', () => {
	let component;

    beforeEach(() => { 
        component = shallow(<App />);
	});

	it('renders correctly (Snapshot)', () => {	
  		expect(component).toMatchSnapshot();
	});

	it('should render SearchListContainer', () => {	
  		expect(component.find(SearchListContainer).exists()).toEqual(true)
	});
 
});