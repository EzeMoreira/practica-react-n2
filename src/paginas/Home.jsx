import React from "react";
import Productos from "../components/Productos";
import logo from '../img/elije-tu-lenguaje.png';
import firebase from '../Config/firebase';

function Home(){
    console.log("Esto es firebase: ", firebase);
    return(
        <div>
            <h2>Las opciones</h2>
            <img src={logo} className='AppLogo' alt='banner' />
            <Productos />
        </div>
    );
}

export default Home;