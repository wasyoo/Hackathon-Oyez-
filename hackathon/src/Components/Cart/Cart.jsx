import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => (
  <div className="cart">
    <div className="purchase_cart">
      <h3>
total :
        <strong id="total">20</strong>
Dinars
      </h3>
      <div className="bag">
        <ul className="cartList list-group">
          <CartItem />
        </ul>
      </div>
    </div>

  </div>

);

export default Cart;
