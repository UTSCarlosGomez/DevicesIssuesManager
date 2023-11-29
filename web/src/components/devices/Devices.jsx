// Devices.jsx

import React, { useState, useEffect } from "react";
import Header from "../Header";
import TableDevices from "./TableDevices";
import FormDevices from "./FormDevices";
import { useNavigate } from "react-router-dom";

function Devices() {
    const navigate = useNavigate();
    const [userActivo, setUserActivo] = useState(null);

    useEffect(() => {
        setUserActivo(localStorage.getItem("userActivo"));
        if (localStorage.getItem("userActivo") === null) navigate("/login");
    }, [navigate, userActivo]);

    const [devices, setDevices] = useState([]);
    const [device, setDevice] = useState(null);
    const [showList, setShowList] = useState(true);

    const list = () => {
        getListDevices()
            .then((data) => setDevices(data))
            .catch((err) => console.log(err));
    };

    if (devices.length === 0) list();

    const viewList = () => {
        if (showList) {
            setShowList(false);
        } else {
            setShowList(true);
            setDevice({
                _id: null,
                code: "",
                brand: "",
                description: "",
                room: {
                    id: "",
                    name: ""
                }
            });
        }
    };

    const save = (device) => {
        if (device._id === null) {
            addDevice(device)
                .then((data) => {
                    list();
                })
                .catch((err) => console.log(err));
        } else {
            updateDevice(device)
                .then((data) => list())
                .catch((err) => console.log(err));
        }
        setShowList(true);
    };

    const deleteDevice = (id) => {
        deleteDeviceById(id)
            .then((data) => {
                if (data.deletedCount === 1) list();
            })
            .catch((err) => console.log(err));
    };

    const viewDevice = (device) => {
        setDevice(device);
        setShowList(false);
    };

    return (
        <div>
            <Header />
            {!showList && (
                <button className="btn btn-secondary" onClick={viewList}>
                    Ver dispositivos
                </button>
            )}
            {showList && (
                <button className="btn btn-secondary" onClick={viewList}>
                    Crear dispositivo
                </button>
            )}
            {!showList && (
                <div>
                    <FormDevices onSave={save} setDevice={device} />
                </div>
            )}
            {showList && <TableDevices devices={devices} onDelete={deleteDevice} onView={viewDevice} />}
        </div>
    );
}

export default Devices;
