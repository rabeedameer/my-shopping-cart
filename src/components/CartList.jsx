//external
import React, { Component } from 'react';
import { connect }  from 'react-redux'; // to connect our component to the store

//internal
import {removeFromCart} from '../modules/Actions';

class CartList extends Component {
  render(){
    const {cart, remove} = this.props;
    return(
      <ul>
        {cart.map(cartItem => (
          <li key={cartItem.id}>
            <p>
              {cartItem.title} | ${cartItem.price} |  x{cartItem.quantity}
            </p>
            <button onClick={() =>remove(cartItem)}
              disabled={cartItem.quantity <= 0}>
              {cartItem.quantity <= 0 ? '' : 'Remove from cart'}
              </button>
            <button></button>

          </li>
        )
        )}
      </ul>
    )
  }
}


const mapStoreToProps = (store) => ({
  cart: Object.values(store.cart)
})
const mapActionsToProps = {
  remove: removeFromCart
}
export default connect (mapStoreToProps, mapActionsToProps)(CartList);
