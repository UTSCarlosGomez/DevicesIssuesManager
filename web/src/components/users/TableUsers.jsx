import React from "react";

function TableUsers(props) {
    const { users, onDelete, onView } = props;

    return (
        <table className="table table-striped">
            <thead className="table-primary">
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.persona.email}</td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => {
                                    onDelete(user._id);
                                }}
                            >
                                Eliminar
                            </button>
                            <button
                                className="btn btn-success btn-sm"
                                onClick={() => {
                                    onView(user);
                                }}
                            >
                                Ver
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableUsers;
