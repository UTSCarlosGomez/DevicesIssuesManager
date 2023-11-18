import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to="/">Gestión de Errores</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active text-white" aria-current="page" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/issueManage">Gestión de Errores</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header