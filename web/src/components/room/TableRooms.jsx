// TableRooms.jsx

import React from "react";

function TableRooms(props) {
    const { rooms, onDelete, onView } = props;

    return (
        <table className="table table-striped">
            <thead className="table-primary">
                <tr>
                    <th>Nombre de la Sala</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {rooms.map((room) => (
                    <tr key={room._id}>
                        <td>{room.name}</td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(room._id)}
                            >
                                Eliminar
                            </button>
                            <button
                                className="btn btn-success btn-sm"
                                onClick={() => onView(room)}
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

export default TableRooms;
