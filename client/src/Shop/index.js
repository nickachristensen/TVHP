import React, { useState, useEffect } from "react";
import Products from "../Products";
import Basket from "../Basket";

const Shop = ({ products, cartItems, setCartItems }) => {

    const onAdd = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
  
    const onRemove = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter(item => item.id !== product.id));
        } else {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item));
        }
    };
  
    
    const productCards = products.map(product => 
        <Products onAdd={onAdd} key={product.id} product={product}/>)

    return (
        <div className="row">
            {productCards}
            <Basket onAdd={onAdd} onRemove={onRemove}cartItems={cartItems} />
        </div>
    );
}

export default Shop;