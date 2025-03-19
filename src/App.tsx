import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage'
import './App.css'

function App() {

  return (
    <>
     <Router>
       <Routes>
          <Route path="/Home" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/" element={<LandingPage />} />
       </Routes>
     </Router>
    </>
  )
}

export default App
