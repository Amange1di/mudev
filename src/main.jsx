import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // or HashRouter

import App from './App';
import "./i18n/i18n.js"
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
