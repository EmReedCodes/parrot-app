import './styles/main.css'
import Home from './pages/Home' //dont need to add index it looks for infex
import Register from './pages/register/Register';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/react-toastify.css'

function App() {

  return (
    
        <Router>
          

<main className="container">
  
              <div className="content">
  
  
                  <Routes>
                    <Route path='/' element={<Home />}>
                    </Route>
                    <Route path='/register' element={<Register />}>
                    </Route>
                  </Routes>
  
              </div>
    </main>

          <ToastContainer />
        </Router>
        
  );
}

export default App;

