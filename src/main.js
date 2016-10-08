//main.js
require('../stylesheets/main.less');

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducers from './reducers';
import Home from './containers/Home';

let store = createStore(homeReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
