import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import App from './App';


import './index.css';

const Root = ({ store, children }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
        {children}
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export default Root;
