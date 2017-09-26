import { setVisibleProducts } from  './visibleProducts';
  
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

describe('Action setVisibleProducts', () => {
	
	it('should be a pure function', () => {	
		expect(setVisibleProducts(action.data.products, action.data.maxNumberOfVisibleResults, action.data.searchTerm, action.data.orderByLowToHight).data.products).toEqual(action.data.products);
		expect(setVisibleProducts(action.data.products, action.data.maxNumberOfVisibleResults, action.data.searchTerm, action.data.orderByLowToHight).data.maxNumberOfVisibleResults).toEqual(action.data.maxNumberOfVisibleResults);
		expect(setVisibleProducts(action.data.products, action.data.maxNumberOfVisibleResults, action.data.searchTerm, action.data.orderByLowToHight).data.searchTerm).toEqual(action.data.searchTerm);
		expect(setVisibleProducts(action.data.products, action.data.maxNumberOfVisibleResults, action.data.searchTerm, action.data.orderByLowToHight).data.orderByLowToHight).toEqual(action.data.orderByLowToHight);
		expect(setVisibleProducts(action.data.products, action.data.maxNumberOfVisibleResults, action.data.searchTerm, action.data.orderByLowToHight).data.type).toEqual(action.data.type);
	});
});
