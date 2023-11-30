// Issues.jsx

import React, { useState, useEffect } from "react";
import TableIssues from "./TableIssues";
import FormIssues from "./FormIssues";
import { getAllIssues, createIssue, updateIssue, deleteIssue } from "../../API/IssuesApi";

function Issues() {
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState(null);
  const [showList, setShowList] = useState(true);

  const list = () => {
    // Lógica para obtener la lista de problemas (issues)
    getAllIssues().then((data) => setIssues(data)).catch((err) => console.log(err));
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
      createIssue(issue).then((data) => list()).catch((err) => console.log(err));
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
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="m-0">Errores</h5>
        {showList && (
          <button className="btn btn-outline-light btn-sm" onClick={viewList}>
            Crear problema
          </button>
        )}
        {!showList && (
          <button className="btn btn-secondary" onClick={viewList}>
            Ver problemas
          </button>
        )}
      </div>
      {!showList && (
        <div>
          <FormIssues onSave={save} setIssue={issue} />
        </div>
      )}
      <div className='card-body'>
        {showList && <TableIssues issues={issues} onDelete={delet} onView={view} />}
      </div>
    </div>
  );
}

export default Issues;
