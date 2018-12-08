import React from 'react';

const CartItem = () => (
  <li className="list-group-item cartItem">
    <div className="delete col-lg-1">
      <i className="fas fa-trash-alt remove_product" />
    </div>
    <div className="fav col-lg-1">
      <i className="far fa-heart fa-2x toggle_fav" />
    </div>

    <div className="product_img col-lg-3">
      <img src="http://www.washington.edu/wholeu/wp-content/uploads/2015/03/FullSizeRender.jpg" alt="food" width="50" height="50" />
    </div>
    <div className="product_info col-lg-2">
      <div className="product_name">
        <strong>Ojja</strong>
      </div>
      <div className="product_color">
        <small>Foulen</small>
      </div>
      <strong>10 DT</strong>
    </div>
    <div className="product_quantity col-lg-3">
      <button className="btn btn-light increase_price">+</button>
      <span className="quantity">0</span>
      <button className="btn btn-light decrease_price">-</button>
    </div>
    <div className="product_price col-lg-2">
      <span data-price="150" className="price">0</span>
DT
    </div>

  </li>
);

export default CartItem;
