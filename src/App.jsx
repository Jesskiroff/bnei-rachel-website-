import './App.css'
import Header from './Header.jsx'
import Image from './Image.jsx'
import Navbar from './Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Faculty from './pages/Faculty.jsx'
import Program from './pages/Program.jsx'
import Shiurs from './pages/Shiurs.jsx'
import Donate from './pages/Donate.jsx'

function App() {
  return (
    <div>
      
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/program" element={<Program />} />
        <Route path="/shiurs" element={<Shiurs />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      
    </div>
  );
}

export default App;
