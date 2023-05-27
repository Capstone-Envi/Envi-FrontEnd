import { Navigate, Route, RouteProps, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard/dashboard'
import { Login } from './pages/authentication/Login/Login'
import { Register } from './pages/authentication/Register/Register'


function App() {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register/>} />
        <Route path='/dashboard' element= {<Dashboard/>} />
      </Routes>
      {/* <Login /> */}
    </>
  )
}

export default App

/* istanbul ignore next */
function GuestOnlyRoute({
  children,
  userIsLogged,
  ...rest
}: { children: JSX.Element | JSX.Element[]; userIsLogged: boolean } & RouteProps) {
  return (
    <Route {...rest}>
      {children}
      {userIsLogged && <Navigate to='/' />}
    </Route>
  );
}

/* istanbul ignore next */
function UserOnlyRoute({
  children,
  userIsLogged,
  ...rest
}: { children: JSX.Element | JSX.Element[]; userIsLogged: boolean } & RouteProps) {
  return (
    <Route {...rest}>
      {children}
      {!userIsLogged && <Navigate to='/' />}
    </Route>
  );
}