import { useAuth0 } from "@auth0/auth0-react"
import {Link} from "wouter"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

const Header = () => {
    const { isAuthenticated }  = useAuth0()

  return (
    <header className="flex justify-between items-center p-4 text-white bg-slate-800">
        <img src="" alt="Logotipo" />
        <nav className="flex items-center gap-2">
            {
                isAuthenticated 
                ? 
                <>
                    <Link to="/">Inicio</Link>
                    <Link to="/profile">Perfil</Link>
                    <LogoutButton/>
                </>
                : 
                <>
                    <LoginButton/>
                </>
            }
        </nav>
    </header>
  )
}

export default Header