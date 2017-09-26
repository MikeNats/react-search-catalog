'use strict';

import { 
  UPDATE_VISIBLE_PRODUCTS 
} from '../../actions/visibleProducts/visibleProducts';

const defaultAction = {
        type: 'UNSUPPORTED',
        data: {
            products: [],
            maxNumberOfVisibleResults: 2,
            searchTerm: '',
            orderByLowToHight: false 
        }
    }, 
    /**
     * Sort Condition based
     * @param  {Object}  a     
     * @param  {Object}  b     
     * @param  {Boolean} orderByLowToHight 
     * @return {Boolean}       
     */
    orderBy = (a, b, orderByLowToHight) => { 
       if (orderByLowToHight) { 
            return +(a.monthly) > +(b.monthly);
        } else {
            return +(a.monthly) < +(b.monthly);
        } 
    },
    /**
     * Return empty array if searchTerm is empty string else filter products based on factors
     * @param  {Array}   products                          
     * @param  {Number}  options.maxNumberOfVisibleResults 
     * @param  {String}  options.searchTerm                
     * @param  {Boolean} options.orderByLowToHight          
     * @return {Array}                                    
     */
    setVisibleResults = ({products = [], maxNumberOfVisibleResults = 2, searchTerm = '', orderByLowToHight = true}) =>     
        searchTerm.trim().length === 0 ? [] :  
            products.filter((product) => 
                product.handset_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
            .sort((a, b) => orderBy(a, b, orderByLowToHight))
            .filter((result, i) => i <= maxNumberOfVisibleResults);

/**
 * Set visible products at store by filtering products array by given factors
 * @param  {Array}  state  
 * @param  {Object} action 
 * @return {Array}       
 */
export const visibleProducts = (state = [], action = defaultAction) => {
    switch (action.type) { 
        case UPDATE_VISIBLE_PRODUCTS:
            return setVisibleResults(action.data);
        default:
            return state;
    }
}
  