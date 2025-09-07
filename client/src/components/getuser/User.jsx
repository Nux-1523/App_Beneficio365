import React, { useEffect, useState } from 'react'
import './user.css'
import axios from "axios"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function User() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async (params) => {
            try {
                const response = await axios.get("http://localhost:8000/api/users");
                setUsers(response.data);
            } catch (error) {
                console.log("Error while fetching data ", error);
            }
        };
        fetchData();
    }, []);

    const deleteUser = async (userId) => {
        await axios
            .delete(`http://localhost:8000/api/delete/users/${userId}`)
            .then ((response) => {
                setUsers((prevUser) => prevUser.filter((user) => user._id !==userId));
                toast.success(response.data.message || "Usuario eliminado", {
               position: "top-right",
               });
    })
            .catch ((error) =>{
                console.log(error);
                toast.error("Error al eliminar el usuario", {position: "top-right"});
            });
    };


    return (
     <div className="userTableContainer">
      {/* Botones encima de la tabla */}
      <div className="userTableHeader">
        <Link to="/add" className="btn btn-primary">
          Añadir usuario <i className="fa-solid fa-user-plus"></i>
        </Link>
        <Link to="/" className="btn btn-secondary">
          Regresar <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre o Institucion</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Tipo Usuario</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Fecha Registro</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.nombre_institucion}</td>
                                <td>{user.email}</td>
                                <td>{user.telefono}</td>
                                <td>{user.tipoUsuario}</td>
                                <td>{user.direccion}</td>
                                <td>{user.fecha_registro}</td>
                                <td className="actionsButtons">
                                    <Link to={`/update/${user._id}`} className="btn btn-info">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Link> 
                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        type="button"
                                        className="btn btn-danger ms-2">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                    
                                      </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}