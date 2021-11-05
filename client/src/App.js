import React from 'react'
import GlobalFonts from './fonts/fonts';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './Home';
import Gallery from './Gallery';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>    
      <Route path="/" element={<Home />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
      <Footer />
      <GlobalFonts />
    </>
  );
}

export default App;
