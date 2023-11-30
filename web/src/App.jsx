import { Auth0Provider } from '@auth0/auth0-react'
import Router from './components/general/Router'

function App() {

  return (
    <Auth0Provider
      domain="dev-26uqny2bp6r1oyzt.us.auth0.com"
      clientId="LtJTgoT78bks0XzUlZRuCmVqiovAU84X"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Router />
    </Auth0Provider>
  )
}

export default App
