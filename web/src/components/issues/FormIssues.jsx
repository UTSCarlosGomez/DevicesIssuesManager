import React, { useState, useEffect } from "react";
import { getDevices } from "../../API/DeviceApi";

function FormIssues(props) {
  const { onSave, setIssue } = props;
  const [devices, setDevices] = useState([])
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

  const reloadData = async () => {
    setDevices(await getDevices())
  }

  useEffect(() => {
    if (setIssue) setIssueState(setIssue)
    reloadData()
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
    if (e.target.name !== "device") {
      setIssueState({
        ...issue,
        [e.target.name]: e.target.value
      });
    } else {
      setIssueState({
        ...issue,
        device: {
          id: e.target.value._id,
          code: e.target.value.code
        }
      })
    }
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
    <form className="p-4">
      <div className="row mb-3">
        <div className="col-12 col-sm-6 col-lg-4 mb-3">
          <label className="form-label">Tipo</label>
          <select
            className="form-control form-select"
            name="type"
            value={issue.type}
            onChange={(e) => handleChange(e)}
          >
            <option value="">-- Seleccionar --</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-3">
          <label className="form-label">Equipo</label>
          <select
            className="form-control form-select"
            name="device"
            value={issue.device}
            onChange={(e) => handleChange(e)}
          >
            <option value="">-- Seleccionar --</option>
            {
              devices.map(device => <option key={device._id} value={device._id}>Equipo {device.code}</option>)
            }
          </select>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mb-3">
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
        <div className="col-12 col-sm-6 col-lg-4">
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
      </div>
      <button className="btn btn-primary" onClick={onClickGuardar}>
        Guardar
      </button>
    </form>
  );
}

export default FormIssues;
