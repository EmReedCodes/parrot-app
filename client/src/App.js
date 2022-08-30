import './styles/main.css'
import Navbar from './components/Navbar';
import Home from './pages/Home' //dont need to add index it looks for infex
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <main className='container'>
      
        <Navbar />
        <Home />
      
    </main>
  );
}

export default App;
