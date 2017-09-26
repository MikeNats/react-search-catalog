import axios from 'axios';

import { 
	UPDATE_VISIBLE_PRODUCTS
} from '../../actions/visibleProducts/visibleProducts';
import { 
	visibleProducts 
} from './visibleProducts';

let testDataSet = [
        { handset_name: "Samsung Galaxy S8+",  "monthly": 68  },
        { handset_name: "Samsung Galaxy S8",   "monthly": 60  }, 
        { handset_name: "Samsung Galaxy S7",   "monthly": 58  }, 
        { handset_name: "Apple iPhone 7 Plus", "monthly": 67  }, 
        { handset_name: "Apple iPhone 7",      "monthly": 50  }
    ],
    action = {
        type: "UPDATE_VISIBLE_PRODUCTS",
        data: {
            products: testDataSet,
            maxNumberOfVisibleResults: 2, 
            searchTerm: '', 
            orderByLowToHight: false 
        }
    };

describe('visibleProducts Reducer', () => {
    describe('Action type is not supported ', () => {

    	it('Should return the default state', () => {
            action.type = "UNSUPORTED"
    		expect(visibleProducts([], action)).toEqual([]);
    	});
    });  

    describe('Action type is UPDATE_VISIBLE_PRODUCTS ', () => {
        describe('`SearchTerm` factor', () => {
            describe('is empty string', () => {

                it('Should return empty array', () => {
                    action.type = "UPDATE_VISIBLE_PRODUCTS"; 

                    expect(visibleProducts([], action)).toEqual([]);
                }); 
            });
            describe('is NOT empty string', () => {
                describe('and match with product names', () => {

                    it('Should return matched products', () => {
                        action.data.searchTerm = 'Samsung';  
              
                        expect(visibleProducts([], action).length).toEqual(3);
                    }); 
                });
                describe('and do NOT match with product names', () => {

                    it('Should return no products', () => {
                        action.data.searchTerm = 'qwerty';  
              
                        expect(visibleProducts([], action).length).toEqual(0);
                    }); 
                });
            });   
        });
        describe('`maxNumberOfVisibleResults` factor', () => {
            describe(' < number of matched products', () => {

                it('Should return exactly  maxNumberOfVisibleResults results', () => {
                    action.data.maxNumberOfVisibleResults = 1;
                    action.data.searchTerm = 'Samsung';

                    expect(visibleProducts([], action).length).toEqual(2);
                });
            });
            describe(' > number of matched products', () => {
                it('Should return exactly exactly the number of matched results', () => {
                    action.data.maxNumberOfVisibleResults = 100;
                    action.data.searchTerm = 'Samsung';

                    expect(visibleProducts([], action).length).toEqual(3);
                });
            });
        });
        describe('`orderByLowToHight` factor', () => {
            describe('is set to false', () => {
                it('Should return exactly maxNumberOfVisibleResults and be order By High To Low', () => {
                    action.data.maxNumberOfVisibleResults = 1;
                    action.data.searchTerm = 'Samsung';
                    let results = visibleProducts([], action);

                    expect(results[0].monthly > results[1].monthly).toBe(true)
                });
            });
            describe('is set to true', () => {
                it('Should return exactly maxNumberOfVisibleResults and be order By Low To Hight', () => {
                    action.data.maxNumberOfVisibleResults = 1;
                    action.data.searchTerm = 'Samsung';
                    action.data.orderByLowToHight = true;
                    let results = visibleProducts([], action);

                    expect(results[0].monthly > results[1].monthly).toBe(false)
                });
            });

        });
    });
});