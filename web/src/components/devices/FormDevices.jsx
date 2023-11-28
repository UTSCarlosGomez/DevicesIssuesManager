// FormDevices.jsx

import React, { useState, useEffect } from "react";

function FormDevices(props) {
    const { getDevice, setDevice, onSave, registrar = false } = props;
    const [device, setDeviceState] = useState({
        code: "",
        brand: "",
        description: "",
        room: {
            id: "",
            name: ""
        }
    });

    useEffect(() => {
        if (setDevice) setDeviceState(setDevice);
    }, [setDevice]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeviceState((prevDevice) => ({
            ...prevDevice,
            [name]: value
        }));
    };

    const handleChangeRoom = (e) => {
        const { name, value } = e.target;
        setDeviceState((prevDevice) => ({
            ...prevDevice,
            room: {
                ...prevDevice.room,
                [name]: value
            }
        }));
    };

    const onClickGuardar = (e) => {
        e.preventDefault();
        onSave(device);
    };

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Código</label>
                    <input
                        type="text"
                        className="form-control"
                        name="code"
                        value={device.code}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Marca</label>
                    <input
                        type="text"
                        className="form-control"
                        name="brand"
                        value={device.brand}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={device.description}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">ID de Sala</label>
                    <input
                        type="text"
                        className="form-control"
                        name="id"
                        value={device.room.id}
                        onChange={(e) => handleChangeRoom(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre de Sala</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={device.room.name}
                        onChange={(e) => handleChangeRoom(e)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => onClickGuardar(e)}
                >
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default FormDevices;
