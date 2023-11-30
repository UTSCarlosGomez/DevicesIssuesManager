import { NavLink } from "react-router-dom"
import LoginButton from "../auth/LoginButton"
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from "../auth/LogoutButton";

const Header = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to="/">Gestión de Errores</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active text-white" aria-current="page" to="/issues">Errores</NavLink>
            </li>
            <li className="nav-item d-flex align-items-center">
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
