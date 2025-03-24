import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { login } from '../servicios/usuariosService';
import { data } from "react-router-dom";

function Loguearse() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const user = await login(data.email, data.password);
            alert("Logueado con exito")
            console.log("Se logueo el user: ", user);
            context.loginUser();
            setLoading(false);
            setAlert({
                variant: "success",
                text: "Ingreso exitoso",
                duration: 3000,
                link: "/",
            });
        }   catch (e) {
            console.log(e.code);
            setAlert({
                variant: "danger",
                text: registroMessage[e.code] || "Ha ocurrido un error",
            });
            setLoading(false);
        }
    };

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