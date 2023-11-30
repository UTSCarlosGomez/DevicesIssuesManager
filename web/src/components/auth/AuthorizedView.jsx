import { useAuth0 } from '@auth0/auth0-react'
import NotAuthorizedPage from './NotAuthorizedPage';

const AuthorizedView = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated
      ? <div className='container mt-4'>{children}</div>
      : <NotAuthorizedPage />
  )
}

export default AuthorizedView
