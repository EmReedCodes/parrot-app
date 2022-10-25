import "./styles/main.css"
import Home from "./pages/Home"
//import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Dashboard from "./pages/dashboard/Dashboard"
import SortItSpellIt from "./pages/sortItSpellIt/SortItSpellIt"
import WordBank from "./pages/wordbank/WordBank"
import Navbar from "./components/nav/Navbar"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
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
            <Route path="/sortitspellit" element={<SortItSpellIt />}></Route>
            <Route path="/wordbank" element={<WordBank />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>

          <ToastContainer autoClose={2000} />
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
