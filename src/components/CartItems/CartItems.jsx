import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { cartItem, allProduct, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  console.log(cartItem);
  return (
    <div className="cart-items">
      <div className="added-items">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p className="title">Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProduct.map((e) => {
        if (cartItem[e.id] > 0) {
          console.log(e.id);
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img className="cartitems-image" src={e.image} alt="" />
                <p className="cartitems-name">{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  className="removeItem"
                  src={removeIcon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      </div>
      <div className="cartCheckOut">
        <div className="checkout-left">
          <div className="subtotal">
            <p>Cart Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="shipping">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <p>Total ${getTotalCartAmount()}</p>
          <button className="checkout-button">Proceed To Checkout</button>
        </div>
        <div className="checkout-right">
          <p>If you have a promo code, Enter here</p>
          <div className="promocode">
            <input type="text" />
            <button>PROMO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
