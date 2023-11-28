// TableDevices.jsx

import React from "react";

function TableDevices(props) {
    const { devices, onDelete, onView } = props;

    return (
        <table className="table table-striped">
            <thead className="table-primary">
                <tr>
                    <th>Código</th>
                    <th>Marca</th>
                    <th>Descripción</th>
                    <th>ID Sala</th>
                    <th>Nombre Sala</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {devices.map((device) => (
                    <tr key={device._id}>
                        <td>{device.code}</td>
                        <td>{device.brand}</td>
                        <td>{device.description}</td>
                        <td>{device.room.id}</td>
                        <td>{device.room.name}</td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(device._id)}
                            >
                                Eliminar
                            </button>
                            <button
                                className="btn btn-success btn-sm"
                                onClick={() => onView(device)}
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

export default TableDevices;
