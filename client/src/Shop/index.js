import React from "react";
import Products from "../Products";
import Basket from "../Basket";

import { Wrapper } from './Shop.styles';

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
        <Wrapper>
            {productCards}
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </Wrapper>
    );
}

export default Shop;