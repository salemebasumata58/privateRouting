import React from 'react'
import { useContext } from 'react'
import AuthContext from '../Contexts/AuthContext';
import {Navigate} from "react-router-dom"

const Login = () => {
    const {isAuth, toggleAuth} = useContext(AuthContext);
    if(isAuth){
       return <Navigate to="/dashboard"  replace={true}/>
    }
  return(
    <>
    <h1>Login Page</h1>
    <button onClick={()=>toggleAuth()}>Login</button>
    </>
  )
}

export default Login