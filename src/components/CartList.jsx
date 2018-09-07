//external
import React, {Component} from 'react';
import {connect} from 'react-redux'; // to connect our component to the store

//internal
import {removeFromCart} from '../modules/Actions';

class CartList extends Component {
  render() {
    const {cart, remove} = this.props;
    return (
      <div>
        <h2>Checkout your Cart</h2>
        <ul>
          {
            cart.map(cartItem => (<li key={cartItem.id}>
              <p>
                {cartItem.title}
                | ${cartItem.price}
                | x{cartItem.quantity}
              </p>
              <button onClick={() => remove(cartItem)} disabled={cartItem.quantity <= 0}>
                {
                  cartItem.quantity <= 0
                    ? ''
                    : 'Remove one'
                }
              </button>
              <button>Remove all</button>
            </li>))
          }

          <p>
            Total: ${cart.reduce((total, cartItem) => parseFloat((total + cartItem.price * cartItem.quantity).toFixed(2)), 0)}
          </p>
          <button >Checkout
          </button>
        </ul>
      </div>)
  }
}

const mapStoreToProps = (store) => ({
  cart: Object.values(store.cart)
})
const mapActionsToProps = {
  remove: removeFromCart
}
export default connect(mapStoreToProps, mapActionsToProps)(CartList);
