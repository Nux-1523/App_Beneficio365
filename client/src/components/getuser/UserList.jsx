// UserList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './userlist.css';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
    <div className="userListContainer">
      <div className="userListHeader">
        {/* Botón para ir a User.jsx */}
        <Link to="/users" className="btnGoToUser">
          Ir a Gestión de Usuarios <i className="fa-solid fa-users"></i>
        </Link>
      </div>

      <table className="userListTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre o Institución</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Tipo Usuario</th>
            <th>Dirección</th>
            <th>Fecha Registro</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="7" className="noUsers">
                No hay usuarios disponibles
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.nombre_institucion}</td>
                <td>{user.email}</td>
                <td>{user.telefono}</td>
                <td>{user.tipoUsuario}</td>
                <td>{user.direccion}</td>
                <td>{user.fecha_registro}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
