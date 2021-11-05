import React from 'react'
import GlobalFonts from './fonts/fonts';
import { BrowserRouter } from "react-router-dom"
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home/>
      <Footer />
      <GlobalFonts />
    </BrowserRouter>
  );
}

export default App;
