import React from "react";
import Loguearse from "../paginas/Loguearse";
import Registro from "../paginas/Registro";
import Home from "../paginas/Home";
import { Routes, Route } from 'react-router-dom';

function Rutas() {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Loguearse" element={<Loguarse />} />
            <Route path="/Registro" element={<Registro />} />
        </Routes>
    );
}

export default Rutas;