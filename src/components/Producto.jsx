import React, {useEffect, useState,useContext} from 'react'
import { useNavigate } from "react-router-dom";
//import bootstrap from 'bootstrap'
import images from '../assets/METOCARBAMOL.webp'
//import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";
import '../Styles/Producto.css'

const Producto = () => {

  return (
    <div>
      <header>

      </header>
      <body>
        <h1>hola</h1>
      
      <div class="card" style="width: 18rem;">
    <img src={images} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      

    </body>
    </div>
  )
}

export default Producto