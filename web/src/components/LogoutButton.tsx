import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = () => {
    const {logout} = useAuth0()

  return (
    <button
        className="bg-pink-300 text-slate-900 py-2 px-4 rounded"
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
        Cerrar Sesión
    </button>
  )
}

export default LogoutButton