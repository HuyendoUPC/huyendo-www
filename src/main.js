//main.js
require('../stylesheets/main.less');

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import homeReducers from './reducers';
import Home from './containers/Home';

let store = createStore(homeReducers);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
