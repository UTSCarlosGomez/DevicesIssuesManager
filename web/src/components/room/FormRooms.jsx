// FormRooms.jsx

import React, { useState, useEffect } from "react";

function FormRooms(props) {
    const { getRoom, setRoom, onSave, register = false } = props;
    const [room, setRoom] = useState({
        _id: null,
        name: "",
    });

    const clear = () => {
        setRoom({
            _id: null,
            name: "",
        });
    };

    useEffect(() => {
        if (setRoom) setRoom(room);
    }, [setRoom]);

    if (room === null) {
        clear();
    }

    const handleChange = (e) => {
        setRoom({
            ...room,
            [e.target.name]: e.target.value,
        });
    };

    const onClickGuardar = (e) => {
        e.preventDefault();
        onSave(room);
        clear();
    };

    return (
        <div>
            <form>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Nombre de la Sala</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={room.name}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(e) => onClickGuardar(e)}
                        >
                            Guardar Sala
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormRooms;
