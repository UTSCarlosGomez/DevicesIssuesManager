import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="d-flex">
        <h1>Gestor de errores</h1>
        <nav>
          <ul className="d-flex gap-4 s">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/IssueManage">Gestionar</Link>
            </li>
          </ul>
          </nav>
    </header>
  )
}

export default Header