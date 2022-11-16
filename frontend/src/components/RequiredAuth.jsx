import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
export const RequireAuth = ({children}) => {
 const auth=JSON.parse(localStorage.getItem('userdata'))||false;
 const toast = useToast()
 const location =useLocation();
 if(!auth){
    toast({
        title: 'Your not logged in',
        description: "Please Log in first",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position:"top"
      })
 }
 
 if(!auth){
return <Navigate  to="/signin" replace state={{data:location.pathname,}} />
 }
    return children
  
}