import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({children}) => {
 const auth=JSON.parse(localStorage.getItem('userdata'))||false;
 
 const location =useLocation();
 
 if(!auth){
return <Navigate  to="/signin" replace state={{data:location.pathname,}} />
 }
    return children
  
}