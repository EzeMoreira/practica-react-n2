import React from "react";
import Productos from "../components/Productos";
import logo from '../img/elije-tu-lenguaje.png'

function Home(){

    return(
        <div>
            <h2>Productos seleccionados</h2>
            <img src={logo} className='AppLogo' alt='banner' />
            <Productos />
        </div>
    );
}

export default Home;