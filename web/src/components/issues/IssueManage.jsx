import { useState } from 'react';

const IssueManage = () => {
    const [observations, setObservations] = useState([]);
    const [newObservation, setNewObservation] = useState('');
    const [errorManagement, setErrorManagement] = useState(['Gestión de error 1', 'Gestión de error 2', 'Gestión de error 3', 'Gestión de error 4']);

    const handleAddObservation = () => {
        setObservations(prevObservations => [...prevObservations, newObservation]);
        setNewObservation('');
    };

    const enterKey = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAddObservation();
        }
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <div className="card mb-3" style={{ backgroundColor: '#F0FFF0' }}>
                        <div className="card-body">
                            <div className='card-header border-secundary mb-3'>
                                <h5 className="card-title">Titulo del error</h5>
                            </div>

                            <textarea className="form-control" id="errorTitle"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success mb-3">
                        Registrar gestión
                    </button>
                    <div className="card" style={{ backgroundColor: '#F0FFF0' }}>
                        <div className="card-body">
                            <div className='card-header border-secundary mb-3'>
                                <h5 className="card-title">Detalles de la gestión</h5>
                            </div>

                            <ul className="list-group list-group-flush">
                                {errorManagement.map((error, index) => (
                                    <li key={index} className="list-group-item list-group-item-action list-group-item-danger">{error}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ backgroundColor: '#F0FFF0' }}>
                        <div className="card-body">
                            <div className='card-header border-secundary mb-3'>
                                <h5 className="card-title text-center ">Observaciones</h5>
                            </div>
                            <div className='card-body' style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                {observations.map((observation, index) => (
                                    <div key={index} className="mb-2">
                                        <div className="bg-info text-white p-2 rounded">{observation}</div>
                                    </div>
                                ))}
                            </div>
                            <div className='input-group mb-3'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Escribe tu observación aquí"
                                    value={newObservation}
                                    onChange={e => setNewObservation(e.target.value)}
                                    onKeyDown={enterKey}
                                />
                                <button onClick={handleAddObservation} className="btn btn-primary">
                                    Agregar observación
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueManage;
