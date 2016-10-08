//main.js
import React from 'react';
import ReactDOM from 'react-dom';

require('../stylesheets/main.less');

import Home from './containers/Home.js';

ReactDOM.render(
  <Home></Home>,
  document.getElementById('example')
);
