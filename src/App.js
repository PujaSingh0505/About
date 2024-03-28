import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App