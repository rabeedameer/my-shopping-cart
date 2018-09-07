import React, { Component, Fragment } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
class App extends Component {
  render() {
    return (
      <Fragment>
      <ProductList />
      <CartList />
      </Fragment>
    );
  }
}

export default App;
