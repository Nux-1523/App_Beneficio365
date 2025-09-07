import React, { useEffect, useState } from 'react';
import './updateuser.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

export default function UpdateUser() {
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

    const { id } = useParams();

    
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    useEffect(() => {
       axios.get(`http://localhost/api/users${id}`)
            .then((response) =>{
                setUser(response.data);
            }) 
            .catch((error) => {
                console.log(error);
            })
    }, [id])
    const submitForm = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/users/${id}`, user) 
          .then((response) => {
            toast.success(response.data.message, {position: "top-right"});
            navigate("/");
        })
          .catch ((error) =>{
            console.log (error);
          })

    }
    return (
            <div className="updateUser">
                <Link to="/" type="button" className="btn btn-secondary"><i className="fa-solid fa-backward"></i></Link>
                <h3>Actualizacion de Usuario</h3>
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
                        <input onChange={inputHandler} type="text" value={user.direccion} className="form-control" id="direccionUser" name="direccion" placeholder="Ingresar direccion" />
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

     