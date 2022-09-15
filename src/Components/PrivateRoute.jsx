import React from 'react'
import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import AuthContext from '../Contexts/AuthContext';

const PrivateRoute = ({children}) => {
    const {isAuth}= useContext(AuthContext);
    console.log(isAuth)
     if(!isAuth){
        return <Navigate to="/login"  replace={true}/>
     }
  return children
  
}

export default PrivateRoute