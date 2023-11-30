import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllIssues } from '../../API/IssuesApi';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [issues, setIssues] = useState([]);

  const reloadData = async () => {
    setIssues(await getAllIssues())
  }

  useEffect(() => {
    reloadData()
  }, [])

  return (
    <main className="container">
      <section className='card'>
        <div className='card-header bg-primary text-white d-flex justify-content-between'>
          <h2 className='card-title'>Gestión de Errores</h2>
        </div>
        <div className='card-body'>
          <div className="alert alert-primary">
            Bienvenido al sistema de gestión de errores. Le recordamos que todavía no
            es una versión estable y puede presentar fallas en su funcionamiento. Si es así
            por favor comuníquese con el administrador del sistema. Para reportar un error puede ingresar <NavLink to='/issues/'>aquí</NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
