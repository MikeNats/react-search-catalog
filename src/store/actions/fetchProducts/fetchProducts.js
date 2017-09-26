'use strict';

import axios from 'axios';

export const REQUEST_IN_PROGRESS = 'STORE_IN_PROGRESS';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

const requestSuccess = (json) => ({
		type: REQUEST_SUCCESS,
		products: json
	});

const requestFail = (status) => ({
		type: REQUEST_FAIL,
		status 
	});

const requestInProgress = () => ({
		type: REQUEST_IN_PROGRESS
  	});


/**
 * Async action to fetch products
 * @param  {String}   uri of the request
 * @return {Function} Tigers different stages of the request  
 */
export const fetchProducts = url => 
	(dispatch, getState) => {
		dispatch(requestInProgress());
		
		return axios.get(url)
	  		.then(response => {
				dispatch(requestSuccess(response.data))
	  		})
	  		.catch(ex => dispatch(requestFail(ex)));
    }
	