import React, { useState } from 'react';
import './adduser.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000/api";
const USERS_URL = `${API_BASE}/users`;

export default function AddUser() {
    const users = {
        nombre_institucion: "",
        email: "",
        telefono: "",
        tipoUsuario: "",
        direccion: "",
        fecha_registro: ""
    };

    const [user, setUser] = useState(users);

    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...user,
            fecha_registro: new Date().toISOString() 
        };

        await axios.post(USERS_URL, dataToSend).then((response) => {
            toast.success(response.data.message,{position:"top-right"});
            navigate("/");
        })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="addUser">
            <Link to="/" type="button" className="btn btn-secondary"><i className="fa-solid fa-backward"></i></Link>
            <h3>Agregar Nuevo Usuario</h3>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="nombre_institucionUser">Nombre o Institucion:</label>
                    <input onChange={inputHandler} type="text" className="form-control" value={user.nombre_institucion} id="nombre_institucionUserUser" name="nombre_institucion" placeholder="Ingresar Nombre o Institucion" />
                </div>
                <div className="form-group">
                    <label htmlFor="emailUser">Email:</label>
                    <input onChange={inputHandler} type="email" className="form-control" value={user.email} id="emailUser" aria-describedby="emailHelp" name="email" placeholder="Ingresar email" />
                </div>
                <div className="form-group">
                    <label htmlFor="telefonoUser">Teléfono:</label>
                    <input onChange={inputHandler} type="text" value={user.telefono} className="form-control" id="telefonoUser" name="telefono" placeholder="Ingresar teléfono"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="tipoUsuarioUser">Tipo Usuario:</label>
                    <input onChange={inputHandler} type="text" value={user.tipoUsuario} className="form-control" id="tipoUsuarioUser" name="tipoUsuario" placeholder="Ingresar tipo de usuario" />
                </div>
                <div className="form-group">
                    <label htmlFor="direccionUser">Direccion:</label>
                    <input onChange={inputHandler} type="text"value={user.direccion} className="form-control" id="direccionUser" name="direccion" placeholder="Ingresar direccion" />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha_registroUser">Fecha de Registro:</label>
                    <input type="text" className="form-control" id="fecha_registroUser" name="fecha_registro" value={new Date().toLocaleDateString()}/>
                </div>
                <button type="submit" className="btn btn-primary submit">Submit</button>
            </form>

        </div>
    );
}