// Issues.jsx

import React, { useState, useEffect } from "react";
import Header from "../Header";
import TableIssues from "./TableIssues";
import FormIssues from "./FormIssues";
import { useNavigate } from "react-router-dom";

function Issues() {
    const navigate = useNavigate();
    const [userActivo, setUserActivo] = useState(null);

    useEffect(() => {
        setUserActivo(localStorage.getItem("userActivo"));
        if (localStorage.getItem("userActivo") === null) navigate("/login");
    }, [navigate, userActivo]);

    const [issues, setIssues] = useState([]);
    const [issue, setIssue] = useState(null);
    const [showList, setShowList] = useState(true);

    const list = () => {
        // Lógica para obtener la lista de problemas (issues)
        getListIssues().then((data) => setIssues(data)).catch((err) => console.log(err));
    };

    if (issues.length === 0) list();

    const viewList = (e) => {
        if (showList) {
            setShowList(false);
        } else {
            setShowList(true);
            setIssue({
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
    };

    const save = (issue) => {
        // Lógica para guardar o actualizar un problema

        if (issue._id === null) {
            addIssue(issue).then((data) => list()).catch((err) => console.log(err));
        } else {
            updateIssue(issue).then((data) => list()).catch((err) => console.log(err));
        }

        setShowList(true);
    };

    const delet = (id) => {
        // Lógica para eliminar un problema
        deleteIssue(id).then((data) => { if (data.deletedCount === 1) list(); }).catch((err) => console.log(err));
    };

    const view = (issue) => {
        // Lógica para ver los detalles de un problema
        setIssue(issue);
        setShowList(false);
    };

    return (
        <div>
            <Header />
            {!showList && (
                <button className="btn btn-secondary" onClick={viewList}>
                    Ver problemas
                </button>
            )}
            {showList && (
                <button className="btn btn-secondary" onClick={viewList}>
                    Crear problema
                </button>
            )}
            {!showList && (
                <div>
                    <FormIssues onSave={save} setIssue={issue} />
                </div>
            )}
            {showList && <TableIssues issues={issues} onDelete={delet} onView={view} />}
        </div>
    );
}

export default Issues;
