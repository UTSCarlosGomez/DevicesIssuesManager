import React from "react";

function TableIssues(props) {
    const { issues, onDelete, onView } = props;

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {issues.map((issue) => (
                <div key={issue._id} className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">{issue.type}</h5>
                            <p className="card-text">Equipo: {issue.device.code}</p>
                            <p className="card-text">Descripción: {issue.description}</p>
                            <p className="card-text">Estado del dispositivo: {issue.deviceStatus}</p>
                            <p className="card-text">Fecha de creación: {issue.createdAt}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={() => onDelete(issue._id)}>
                                Eliminar
                            </button>
                            <button className="btn btn-success" onClick={() => onView(issue)}>
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TableIssues;
