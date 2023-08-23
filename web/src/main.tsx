import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

const { VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENTID } = import.meta.env

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider 
    domain={VITE_AUTH0_DOMAIN} 
    clientId={VITE_AUTH0_CLIENTID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>
)
