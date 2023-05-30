import { Navigate, Route, RouteProps, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { UserManagement } from './pages/UserManagement/UserManagement'
import { Login } from './pages/authentication/Login/Login'
import { Register } from './pages/authentication/Register/Register'


function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register/>} />
        <Route path='/dashboard' element= {<Dashboard/>} />
        <Route path='/users' element= {<UserManagement/>} />
      </Routes>
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