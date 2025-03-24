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

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div className="registro">
            <h2>Accede</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Usuario</label> <br/>
                <input type="text" {...register("usario", { required:true})} /> <br/>
                <label>Contraseña</label> <br/>
                <input 
                    type="password"
                    {...register("password", {
                        required: true,
                        minLenght: 6,
                        maxLenght: 12,
                    })} required /> <br/>
                    {errors.password && (
                        <>
                            {errors.password?.tpye === "required" &&(
                                <span>El campo es obligatorio</span>
                            )}
                            {errors.password?.type === "minLenght" && (
                                <span>Debe contener al menos 6 caracteres</span>
                            )}
                            {errors.password?.type === "maxLenght" && (
                                <span>Debe contener al menos 12 caracteres</span>
                            )}
                        </>
                    )}  <br/>
                    <button type="submit" id="botonComprar">Enviar</button>
            </form>
        </div>
    );
}

export default Loguearse;