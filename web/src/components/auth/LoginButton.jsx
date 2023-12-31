import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn btn-warning btn-sm" onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
}

export default LoginButton
