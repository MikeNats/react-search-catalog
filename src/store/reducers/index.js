'use strict';

import {createStore,  applyMiddleware, compose,  combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import {fetchProducts} from './fetchProducts/fetchProducts';
import {visibleProducts} from './visibleProducts/visibleProducts';


/**
 * @description combine and export all reducers
 * @export {Reducers}
 */
export const reducers = combineReducers({
		fetchProducts: fetchProducts,
		visibleProducts: visibleProducts,
		routing: routerReducer
	});

		