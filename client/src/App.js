import "./styles/main.css"
import Home from "./pages/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Dashboard from "./pages/dashboard/Dashboard"
import Settings from "./pages/settings/Settings"
import SayItSortIt from './pages/sayitsortit/SayItSortIt'
import WordBank from "./pages/wordbank/WordBank"
import Navbar from "./components/nav/Navbar"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState, useEffect, useRef } from "react"

function App() {

  //this isnt perfect, doesnt update until a new render

  
  const [currentTheme, setCurrentTheme] = useState('');

  useEffect(() => {
    window.addEventListener('storage', () => {
      const theme = localStorage.getItem('currentTheme')
      console.log(theme);
      setCurrentTheme(theme);
    })
  }, []);
  
console.log(currentTheme)
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
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/sayitsortit" element={<SayItSortIt />}></Route>
            <Route path="/wordbank" element={<WordBank />}></Route>
              <Route path="/about" element={<About />}></Route>
          
          </Routes>

          <ToastContainer
position="top-right"
autoClose={2500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme={currentTheme}
/>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
