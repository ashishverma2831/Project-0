import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Home from './pages/Home'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import Register from './pages/Register'
import PhoneAuthPage from './pages/PhoneAuthPage'

const App = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical:'top', horizontal:'right' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/phone-auth-page" element={<PhoneAuthPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App