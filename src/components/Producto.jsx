import React, { useState} from "react";

function Producto({id, nombre, imagen, precio}) {
    
    const [comprar, setComprar] = useState("");

    const handleComprar = (e) => {
        setComprar("Obtenido, muchas gracias :D")
    }

    return(
        <div className="contenedorProducto">
            <img src={imagen} alt="Su descripcion"/> <br />
            <div className="nombreYprecio">
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            </div> <br />
            <div>{comprar}</div>
            <button id="botonComprar" onClick={handleComprar}>Obtener</button>
        </div>
    )
}

export default Producto;