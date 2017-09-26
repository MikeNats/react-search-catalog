'use strict';

export const UPDATE_VISIBLE_PRODUCTS = 'UPDATE_VISIBLE_PRODUCTS';


/**
 * Action to set visible products
 * @param  {String}   uri of the request
 * @return {Function} Tigers different stages of the request  
 */
export const setVisibleProducts = (products, maxNumberOfVisibleResults, searchTerm, orderByLowToHight) =>  ({
		type: UPDATE_VISIBLE_PRODUCTS,
		data: {
			products: products,
			maxNumberOfVisibleResults: maxNumberOfVisibleResults,
			searchTerm: searchTerm,
			orderByLowToHight: orderByLowToHight
		}
	});
    
	