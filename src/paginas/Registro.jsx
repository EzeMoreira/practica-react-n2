import React from "react";

function Registro() {

    return(
        <>
        <h2>Registrate para +</h2>
        <div className="registro">
            <form action="#" method="GET">
                <label>
                    Nombre:
                </label> <br />
                <input type="text" name="name" placeholder="Nombre" required /> <br/>
                <label>
                    Email:
                </label> <br />
                <input type="email" name="email" placeholder="Email" required /> <br/>
                <label>
                    Password:
                </label> <br />
                <input type="password" name="password" placeholder="Password" required />
                <br/> <br/>
                <button type="submit" value="submit" id="botonComprar">Enviar</button> <br />
            </form>
        </div>
        </>
    );
}

export default Registro;