import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import products from './products.json';
import { appReducer } from './modules/reducers';

import { createStore } from 'redux';
import {Provider} from 'react-redux';


const initialState = {
                     products: products.reduce((hashmap, item) => ({
                       ...hashmap,
                       [item.id]: item
                     }),{}),
                     cart: {},
                    }
const store = createStore(appReducer,
  initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
