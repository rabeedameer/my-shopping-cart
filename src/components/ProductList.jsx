//external
import React, { Component } from 'react';
import { connect }  from 'react-redux'; // to connect our component to the store

//internal
import {addToCart} from '../modules/Actions';

class ProductList extends Component {
  render(){
    const {products, add} = this.props; // products = this.props.products // the same.
    // const {add} =  this.props; // add = this.props.add
    return(
      <ul>
        {products.map(item => (
          <li key={item.id}>
            <p>{item.title}|  ${item.price} {item.inventory > 0 ? `| x${item.inventory}` : ''}</p>
            <button onClick={() => add(item)} disabled={item.inventory <= 0}>{item.inventory > 0 ? 'Add to Cart' : 'Sold out'}</button>
          </li>)) }
      </ul>
    )
  }
}


const mapStoreToProps = (store) => ({
  products: Object.values(store.products)// an object from store into an array
})
const mapActionsToProps = {
  add: addToCart
}

export default connect(mapStoreToProps, mapActionsToProps)(ProductList) ;
