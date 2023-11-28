import React, { useState, useEffect } from "react";

function FormUsers(props) {
    const { setUsuario, onSave, registrar = false } = props;
    const [user, setUser] = useState({
        _id: null,
        name: "",
        lastname: "",
        persona: {
            _id: "",
            email: "",
        },
    });

    const limpiar = () => {
        setUser({
            _id: null,
            name: "",
            lastname: "",
            persona: {
                _id: "",
                email: "",
            },
        });
    };

    useEffect(() => {
        if (setUsuario) setUser(setUsuario);
    }, [setUsuario]);

    if (user === null) {
        limpiar();
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangePersona = (e) => {
        setUser({
            ...user,
            persona: {
                ...user.persona,
                [e.target.name]: e.target.value,
            },
        });
    };

    const onClickGuardar = (e) => {
        e.preventDefault();
        onSave(user);
        limpiar();
    };

    return (
        <div>
            <form>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        ></input>
                    </div>
                    <div className="col">
                        <label className="form-label">Apellido</label>
                        <input
                            className="form-control"
                            type="text"
                            name="lastname"
                            value={user.lastname}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        ></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Correo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={user.persona.email}
                            onChange={(e) => {
                                handleChangePersona(e);
                            }}
                        ></input>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onClickGuardar}
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormUsers;
