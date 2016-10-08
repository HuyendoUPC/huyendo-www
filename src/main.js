//main.js
require('../stylesheets/main.less');

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import homeReducers from './reducers'
import App from './components/App'

let store = createStore(homeReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
