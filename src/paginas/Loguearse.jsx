import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { login } from '../servicios/usuariosService';

function Loguearse() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    return(
        <div className="registro">
            <h2>Accede</h2>
            <form action="#" method="GET">
                <label>
                    Email:
                </label> <br />
                <input type="email" name="email" required placeholder="Email"/> <br />
                <label>
                    Password:
                </label> <br />
                <input type="password" name="password" placeholder="Password" required/>
                <br /> <br />
                <button type="submit" id="botonComprar">Enviar</button> <br />
            </form>
        </div>
    );
}

export default Loguearse;