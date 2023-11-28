// Rooms.jsx

import React, { useState, useEffect } from "react";
import Header from "../Header";
import TableRooms from "./TableRooms";
import FormRooms from "./FormRooms";
import { useNavigate } from "react-router-dom";

function Rooms() {
    const navigate = useNavigate();
    const [userActivo, setUserActivo] = useState(null);

    useEffect(() => {
        setUserActivo(localStorage.getItem("userActivo"));
        if (localStorage.getItem("userActivo") === null) navigate("/login");
    }, [navigate, userActivo]);

    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState(null);
    const [showList, setShowList] = useState(true);

    const list = () => {
        // Lógica para obtener la lista de salas
        getListRooms()
            .then((data) => setRooms(data))
            .catch((err) => console.log(err));
    };

    if (rooms.length === 0) list();

    const viewList = (e) => {
        if (showList) {
            setShowList(false);
        } else {
            setShowList(true);
            setRoom({
                _id: null,
                name: "",
            });
        }
    };

    const save = (room) => {
        if (room._id === null) {
            addRoom(room)
                .then((data) => {
                    list();
                })
                .catch((err) => console.log(err));
        } else {
            updateRoom(room)
                .then((data) => list())
                .catch((err) => console.log(err));
        }
        setShowList(true);
    };
    const delet = (id) => {
        // Lógica para eliminar una sala
        deleteRoomById(id)
            .then((data) => {
                if (data.deletedCount === 1) list();
            })
            .catch((err) => console.log(err));
    };


    const view = (room) => {
        setRoom(room);
        setShowList(false);
    };

    return (
        <div>
            <Header />
            {!showList && (
                <button className="btn btn-secondary" onClick={viewList}>
                    Ver salas
                </button>
            )}
            {showList && (
                <button className="btn btn-secondary" onClick={viewList}>
                    Crear sala
                </button>
            )}
            {!showList && (
                <div>
                    <FormRooms onSave={save} setRoom={room} />
                </div>
            )}
            {showList && <TableRooms rooms={rooms} onDelete={delet} onView={view} />}
        </div>
    );
}

export default Rooms;
