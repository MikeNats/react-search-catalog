import axios from 'axios';

import { 
	fetchProducts,
	REQUEST_SUCCESS,
	REQUEST_FAIL,
	REQUEST_IN_PROGRESS 
} from './fetchProducts';
  

describe('fetchProducts Action', () => {
	const expected = [
        { type: REQUEST_IN_PROGRESS },
        { type: REQUEST_SUCCESS },
        { type: REQUEST_FAIL }
	],
	url = 'https://endpoint.local',
	dispatch = jest.fn(),
   	getState = jest.fn(() => ({url: url}));


   	afterEach(()=> {
   		dispatch.mockReset();
   	});

    describe('On invocation', () => {
    	beforeEach(function () {
	      axios.get = jest.fn((url) => Promise.resolve({}));
	    }); 

    	it('should dispatch action`requestInProgress`', async () => {
			await fetchProducts(url)(dispatch, getState);
			
			expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
		});
    });

    describe('On Success', () => {
    	let mockData = { 
	      		data: { 
	      			mock: "data"
	      		}
	        };

    	beforeEach(function () {
	      	axios.get = jest.fn((url) => Promise.resolve(mockData)); 
	     });

    	it('should dispatch action `requestSuccess` with given data', async () => {
			await fetchProducts(url)(dispatch, getState);
			
        	expect(dispatch.mock.calls[1][0].type).toEqual(REQUEST_SUCCESS);
        	expect(dispatch.mock.calls[1][0].products).toEqual(mockData.data);
		});
    });

    describe('On Fail', () => {
    	beforeEach(function () {
	      	axios.get = jest.fn((url) => Promise.reject()); 
	     });

    	it('should dispatch action `requestFail` with the relevant status message', async () => {
			await fetchProducts(url)(dispatch, getState);
			
        	expect(dispatch.mock.calls[1][0]).toEqual(expected[2]);
		});
    });
});