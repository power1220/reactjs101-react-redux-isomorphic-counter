import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import Counter from '../common/containers/Counter';
import configureStore from '../common/store';

const initialState = window.__PRELOADED_STATE__;

const store = configureStore(fromJS(initialState));

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#app')
);
