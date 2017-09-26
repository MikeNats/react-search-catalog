'use strict';

import { 
  REQUEST_IN_PROGRESS, 
  REQUEST_SUCCESS, 
  REQUEST_FAIL 
} from '../../actions/fetchProducts/fetchProducts';

/**
 * @description Returns relevant message base on the given status.
 * @param  {Number} 
 * @return {String}
 */
const setErrorMessage = status => {
    switch(status) { //http://www.restapitutorial.com/httpstatuscodes.html   
      case 400:
        return '400 Bad Request. The request could not be understood by the server due to malformed syntax.';
      case 401:
        return 'Unauthorized. The request requires user authentication.';
      case 403:
        return 'Forbidden. The server understood the request, but is refusing to fulfill it.';
      case 404:
        return 'Not Found. The server has not found anything matching the Request-URI.';
      case 409:
        return 'Conflict. The request could not be completed due to a conflict with the current state of the resource.';
      case 500:
        return 'Internal Server Error. The server encountered an unexpected condition which prevented it from fulfilling the request.';
      default:
        return `Error Occured with status ${status}.`; 
 } 
}

export const defaultState = {
  isFetching: false,
  error: {
    status: 200,
    message: ''
  },
  data: []
}

const defaultAction = {
  type: 'UNSUPPORTED'
}

/**
 * @description Reducer for async store products action
 * @param  {Object}
 * @param  {Object}
 * @return {Object}
 */
export const fetchProducts = (state = defaultState, action = defaultAction) => {
    switch (action.type) { //request failed
        case REQUEST_FAIL:
            return {
                ...state,
                isFetching: false,
                error: {
                    status: true,
                    message: setErrorMessage(action.status)
                }
            }
        case REQUEST_IN_PROGRESS: //request in progress
            return {
                ...state,
                isFetching: true,
                error: {
                    status: false,
                    message: ''
                }
            }
        case REQUEST_SUCCESS: //request success
            return {
                data: [].concat([], action.products),
                isFetching: false,
                error: {
                    status: false,
                    message: ''
                }
            }
        default:
            return state
  }
}
