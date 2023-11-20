import React from 'react';

const Home = () => {
  const issues = [
    {title: 'Incidencia 1', description: 'Descripción de la incidencia 1', type: 'Tipo de equipo 1' },
    { title: 'Incidencia 2', description: 'Descripción de la incidencia 2', type: 'Tipo de equipo 2' },
    // Agrega más incidencias según sea necesario
  ];
  
  return (
    <main className="container">
      <div className="row mt-5">
        {issues.map((issue, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ backgroundColor: '#F0FFF0' }}>
              <div className="card-header border-secundary mb-3">
                <h2 className="card-title">{issue.title}</h2>
              </div>
              <div className="card-body">
                <p className="card-text">{issue.description}</p>
                <p className="card-text">{issue.type}</p>
                {/* Agrega cualquier otro contenido o botones necesarios */}
                <a className="btn btn-primary">Gestionar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
