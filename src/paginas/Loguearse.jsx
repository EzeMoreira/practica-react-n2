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
            
        </div>
    );
}

export default Loguearse;