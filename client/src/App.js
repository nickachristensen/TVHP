import React from 'react'
import { BrowserRouter } from "react-router-dom"
import './App.css';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1 className="h1">The Very High Priestess</h1>
      <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;
