import React from "react";
import { useForm } from "react-hook-form"
import { create } from "../servicios/usuariosService";
import { data } from "react-router-dom";

function Registro() {

    const {
        register,
        handlesubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (data) => {

        try{
            const user = await create(data);
            alert("Usuario creado ", user)
            console.log("Este es el user creado: ", user);
            setAlert({
                variant: "success",
                text: "Gracias por registrarte",
                duration: 3000,
                link: "/ingresar"
            });
        }   catch (e) {
            console.log(e.code);
            setAlert({
                variant: "danger",
                text: registroMessage[e.code] || "Ha ocurrido un error",
            });
        }
    };

    return(
        <div>
        <h2>Registrate para +</h2>
        <form onSubmit={handlesubmit(onSubmit)}>

        <label>Nombre:</label><br />
        <input type="text" {...register("nombre", { required: true})} />
        {errors.nombre && (

            <span>El campo es obligatorio</span>
        )} <br />

        <label>Apellido</label> <br />
        <input type="text" {...register("apellido")} />

        <br />

        <label>Email</label>
        <input 
            type="text"
            {...register("email", {
                required: true,
                pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            })} />
            <br />

            {errors.email && (
                <>
                {errors.email?.type === "required" && (
                    <span>El campo es obligatorio</span>
                )}
                {errors.email?.type === "pattern" && (
                    <span>Formato de email no valido</span>
                )}
                </>
            )}
            <br />
            <label>Contraseña</label> <br/>
            <input 
                type="password"
                {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                })} required
                /> <br />

                {errors.password && (
                    <>
                    {errors.password?.type === "required" && (
                        <span>El campo es obligatorio</span>
                    )}
                    {errors.password?.type === "mingLength" && (
                        <span>Debe contener al menos 6 caracteres</span>
                    )}
                    {errors.password?.type === "maxLength" && (
                        <span>Debe contener como maximo 12 caracteres</span>
                    )}
                    </>
                )} <br/>

                <button type="submit" id="botonComprar">Registrarse</button>

            </form>
        </div>
    );
}

export default Registro;