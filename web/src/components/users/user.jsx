import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import TableUsers from "./TableUsers";
import FormUsers from "./FormUsers";

function Users() {
    const navigate = useNavigate();
    const [userActivo, setUserActivo] = useState(null);

    useEffect(() => {
        setUserActivo(localStorage.getItem("userActivo"));
        if (localStorage.getItem("userActivo") === null) navigate("/login");
    }, [navigate, userActivo]);

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [showList, setShowList] = useState(true);

    // Función para obtener la lista de usuarios
    const list = () => {
        // Llamar a la función que obtiene la lista de usuarios (getListUsers)
        getListUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Verificar si la lista de usuarios está vacía y llamar a la función list() si es así
    if (users.length === 0) list();

    // Función para alternar entre la vista de lista y la vista de creación/edición
    const viewList = (e) => {
        if (showList) {
            setShowList(false);
        } else {
            setShowList(true);
            // Establecer el estado de usuario para la creación/edición
            setUser({
                _id: null,
                name: "",
                lastname: "",
                persona: {
                    _id: "",
                    email: "",
                },
            });
        }
    };

    // Función para guardar un usuario
    const save = (user) => {
        if (user._id === null) {
            // Llamar a la función que agrega un usuario (agregarUsuario)
            agregarUsuario(user)
                .then((data) => {
                    // Actualizar la lista de usuarios después de agregar
                    list();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // Llamar a la función que actualiza un usuario (actualizarUsuario)
            actualizarUsuario(user)
                .then((data) => {
                    // Actualizar la lista de usuarios después de actualizar
                    list();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setShowList(true);
    };

    // Función para eliminar un usuario
    const delet = (id) => {
        // Llamar a la función que elimina un usuario (eliminarUsuario)
        eliminarUsuario(id)
            .then((data) => {
                // Verificar si se eliminó un usuario y actualizar la lista
                if (data.deletedCount === 1) list();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Función para ver los detalles de un usuario
    const view = (user) => {
        setUser(user);
        setShowList(false);
    };

    return (
        <div>
            <Header />
            {!showList && (
                <button className="btn btn-secondary" onClick={viewList}>
                    Ver usuarios
                </button>
            )}
            {showList && (
                <button className="btn btn-secondary" onClick={viewList}>
                    Crear usuario
                </button>
            )}
            {!showList && (
                <div>
                    {/* Componente FormUsers para la creación/edición de usuarios */}
                    <FormUsers onSave={save} setUser={user} />
                </div>
            )}
            {showList && (
                <TableUsers users={users} onDelete={delet} onView={view} />
            )}
        </div>
    );
}

export default Users;
