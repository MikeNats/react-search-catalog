'use strict';

import '../scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
  BrowserRouter,
  Route,
  HashRouter,
} from 'react-router-dom';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import  createBrowserHistory  from 'history/createBrowserHistory';
import store from './store/store';

import App from './components/app/app';
import ProductContainer from './containers/product/productContainer';

/**
 * @description  Bootstraping the of App
 * App connected with react-redux & react-router 
 */ //

ReactDOM.render(	
  <Provider store={store}>
    <BrowserRouter history={syncHistoryWithStore(createBrowserHistory(), store)}> 
      <section>
        <HashRouter>
          <section> 
            <Route exact path='/' component={App} />
            <Route path='/product/:id' component={ProductContainer} exact />
          </section>	
        </HashRouter>
      </section>	
    </BrowserRouter> 
  </Provider>, 
	document.getElementById('react-container')
);