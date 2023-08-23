import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0()

  return (
    <button 
        className="bg-pink-300 text-slate-900 py-2 px-4 rounded"
        onClick={() => loginWithRedirect()}
    >
        Iniciar Sesión
    </button>
  )
}

export default LoginButton