import React, { useState, useEffect } from "react";

function FormIssues(props) {
    const { onSave, setIssue } = props;
    const [issue, setIssueState] = useState({
        _id: null,
        creator: {
            id: "",
            name: ""
        },
        device: {
            id: "",
            code: ""
        },
        type: "",
        description: "",
        deviceStatus: "",
        status: "",
        createdAt: "",
        notes: [{
            content: "",
            creatorName: "",
            createdAt: ""
        }],
        issuesManagement: [{
            responsible: {
                id: "",
                name: ""
            },
            description: "",
            startDate: "",
            endDate: "",
            usedObjects: ""
        }]
    });

    useEffect(() => {
        if (setIssue) setIssueState(setIssue);
    }, [setIssue]);

    if (issue === null) {
        setIssueState({
            _id: null,
            creator: {
                id: "",
                name: ""
            },
            device: {
                id: "",
                code: ""
            },
            type: "",
            description: "",
            deviceStatus: "",
            status: "",
            createdAt: "",
            notes: [{
                content: "",
                creatorName: "",
                createdAt: ""
            }],
            issuesManagement: [{
                responsible: {
                    id: "",
                    name: ""
                },
                description: "",
                startDate: "",
                endDate: "",
                usedObjects: ""
            }]
        });
    }

    const handleChange = (e) => {
        setIssueState({
            ...issue,
            [e.target.name]: e.target.value
        });
    };

    const onClickGuardar = (e) => {
        e.preventDefault();
        onSave(issue);
        setIssueState({
            _id: null,
            creator: {
                id: "",
                name: ""
            },
            device: {
                id: "",
                code: ""
            },
            type: "",
            description: "",
            deviceStatus: "",
            status: "",
            createdAt: "",
            notes: [{
                content: "",
                creatorName: "",
                createdAt: ""
            }],
            issuesManagement: [{
                responsible: {
                    id: "",
                    name: ""
                },
                description: "",
                startDate: "",
                endDate: "",
                usedObjects: ""
            }]
        });
    };

    return (
        <div>
            <form>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Tipo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="type"
                            value={issue.type}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="col">
                        <label className="form-label">Equipo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="device.code"
                            value={issue.device.code}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={issue.description}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Estado del dispositivo</label>
                        <select
                            className="form-select"
                            name="deviceStatus"
                            value={issue.deviceStatus}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Seleccionar...</option>
                            <option value="En mantenimiento">En mantenimiento</option>
                            <option value="Fuera de servicio">Fuera de servicio</option>
                            <option value="Optimo">Optimo</option>
                        </select>
                    </div>
                    <div className="col">
                        <label className="form-label">Fecha de creación</label>
                        <input
                            className="form-control"
                            type="date"
                            name="createdAt"
                            value={issue.createdAt}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <button className="btn btn-primary" onClick={onClickGuardar}>
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default FormIssues;
