import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => {
    return store.cart.items
  });

  const clearCartItems = () => {
    
    dispatch(clearCart())
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-lg">Cart Items</h1>
      <div className="w-6/12 m-auto mb-4">
      <button className="p-2 m-2 bg-black text-white rounded-md" onClick={clearCartItems} >Clear Cart</button>
      {
        cartItems.length === 0 && (<h1>Cart is empty. Add Items to the Cart</h1>)
      }
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
