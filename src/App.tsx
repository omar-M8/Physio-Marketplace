import SignUP from './pages/SignUp'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import './App.css'

function App() {

  return (
    <>
     <Router>
       <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
       </Routes>
     </Router>
    </>
  )
}

export default App
