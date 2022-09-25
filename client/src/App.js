import "./styles/main.css"
import Home from "./pages/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Dashboard from "./pages/dashboard/Dashboard"
import SayItSpellIt from "./pages/sayItSpellIt/SayItSpellIt"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function App() {


  return (
    <>

            
          <Router>
          <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/sayitspellit" element={<SayItSpellIt />}></Route>
            </Routes>
         
            <ToastContainer autoClose={2000} />
            </main>
          </Router>
              

    </>
  )
}

export default App
