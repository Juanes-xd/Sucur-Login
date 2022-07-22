import React,{Fragment} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Footer from "./components/Footer";
import Login from "./components/Login";
import Producto from "./components/Producto.jsx";
import Succes from './components/Succes';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
      <Route path="/pagar" element={<Succes/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/producto' element={<Producto/>}/>
      </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;