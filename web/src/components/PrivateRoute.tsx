import { useAuth0 } from "@auth0/auth0-react"

type Props = {
    children: React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({ children }) => {

    const { isAuthenticated } = useAuth0()

  if (!isAuthenticated) {
    return <p>Acceso denegado. Debes iniciar sesión.</p>
  }

    return <>{children}</>
}

export default PrivateRoute