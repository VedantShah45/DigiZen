import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='m-0 p-0 b-0 w-full h-full'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
