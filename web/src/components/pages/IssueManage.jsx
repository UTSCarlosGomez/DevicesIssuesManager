import { useState } from 'react';

const IssueManage = () => {
    const [observations, setObservations] = useState([]);
    const [newObservation, setNewObservation] = useState('');
    const [errorManagement, setErrorManagement] = useState(['Gestión de error 1', 'Gestión de error 2', 'Gestión de error 3', 'Gestión de error 4']);

    const handleAddObservation = () => {
        setObservations(prevObservations => [...prevObservations, newObservation]);
        setNewObservation('');
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <div className="card mb-3" style={{ backgroundColor: '#C1C1BF' }}>
                        <div className="card-body">
                            <h5 className="card-title">Titulo del error</h5>
                            <textarea className="form-control" id="errorTitle"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Registrar gestión</button>
                    <div className="card" style={{ backgroundColor: '#C1C1BF' }}>
                        <div className="card-body">
                            <h5 className="card-title">Detalles de la gestión</h5>
                            <ul className="list-group list-group-flush">
                                {errorManagement.map((error, index) => (
                                    <li key={index} className="list-group-item list-group-item-action list-group-item-primary">{error}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ backgroundColor: '#C1C1BF' }}>
                        <div className="card-body">
                            <h5 className="card-title">Observaciones</h5>
                            {observations.map((observation, index) => (
                                <p key={index}>{observation}</p>
                            ))}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Escribe tu observación aquí"
                                value={newObservation}
                                onChange={e => setNewObservation(e.target.value)}
                            />

                            <button onClick={handleAddObservation} className="btn btn-primary">Agregar observación</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueManage;