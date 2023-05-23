import { useState } from 'react'
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/authentication/Login/Login'
import { Register } from './pages/authentication/Register/Register'
// import { Header } from './components/Header/Header'
// import { Register } from './pages/authentication/Register/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register/>} />
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