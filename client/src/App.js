import React, { useState, useEffect } from 'react'
import GlobalFonts from './fonts/fonts';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './Home';
import Gallery from './Gallery';
import Header from './Header';
import Footer from './Footer';
import Shop from './Shop';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      fetch('/products/')
      .then(resp => resp.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <Header countCartItems={cartItems.length}/>
      <Routes>    
      <Route path="/" element={<Home />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/shop" element={<Shop products={products} cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
      </Routes>
      <Footer />
      <GlobalFonts />
    </>
  );
}

export default App;
