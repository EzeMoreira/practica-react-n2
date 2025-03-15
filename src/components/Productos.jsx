import React, { useState, useEffect } from "react";
import { getAllProductos } from "../servicios/ProductoServicio";
import Producto from "./Productos";

function Productos() {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState();
    const [buscar, setBuscar] = useState("iphone");

    useEffect(() => {
        const request = async () => {

            try {
                const response = await getAllProductos(buscar);

                console.log("Desde los productos", response.results);

                setProductos(response.results)
                setLoading(false);
            } catch (evento) {
                console.log(evento);
            }
        };

        request();
    }, [buscar]);

    const handleChange = (event) => {

        const value = event.target.value;
        console.log(value);
        setBuscar(value);
    }

    if (loading) {
        return(
            <div>Cargando...</div>
        )
    }   else {
        return(
            <>
            {(productos || []).slice(0, 8).map(producto => 
    <Producto
        key={producto.id} // Agregar una key para evitar warnings
        id={producto.id}
        imagen={producto.thumbnail}
        nombre={producto.title}
        precio={producto.price}
    />
)}
            
            </>
        );
    }
}

export default Productos;
