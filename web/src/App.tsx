import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

const App = (): JSX.Element => {
  return (
    <>
      <Header/>
      <PrivateRoute>
        <p>Bienvenidos</p>
      </PrivateRoute>
    </>
  )
}

export default App
