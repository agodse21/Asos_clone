import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import SigninandSignup from './Signin&Signup'

export default function All_Route() {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/signup' element={<SigninandSignup/>} />
        <Route path='/signin' element={<SigninandSignup/>} />
    </Routes>
  )
}
