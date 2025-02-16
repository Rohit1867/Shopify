import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);
const getDefaultcart = ()=>{
  let cart={};
  for(let index =0;index<300+1;index++){
    cart[index] = 0;

  }
  return cart;
}
const ShopContextProvider = (props) => {

  const[cartItems,setCartItems]=useState(getDefaultcart());
  const[all_product,setAll_product] =useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_product(data))
  },[])
  const addToCart=(itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
  }
  const removeFromCart=(itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems =() =>{
    let totalitem=0;
    for(const item in cartItems){
      if(cartItems[item]>0)
      {
        totalitem+=cartItems[item];
      }
    }
    return totalitem;
  }
  const contextvalue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

