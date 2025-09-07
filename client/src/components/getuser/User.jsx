import React, { useEffect, useState } from 'react'
import './user.css'
import axios from "axios"
import { Link } from 'react-router-dom'

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


    return (
        <div className="userTable">
            <Link to="/add" type="button" className="btn btn-primary">Add user <i className="fa-solid fa-user-plus"></i></Link>
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
                        <th scope="col">Actions</th>
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
                                    <button type="button" className="btn btn-info">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button type="button" className="btn btn-danger">
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