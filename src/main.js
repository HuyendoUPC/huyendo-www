//main.js
import React from 'react';
import ReactDOM from 'react-dom';

require('../stylesheets/main.less');

import Home from './containers/home.js';

ReactDOM.render(
  <Home />,
  document.getElementById('example')
);
