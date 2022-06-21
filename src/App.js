import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Footer from "./components/Footer";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;