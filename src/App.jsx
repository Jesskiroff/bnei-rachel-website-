import './App.css'
import Navbar from './Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Faculty from './pages/Faculty.jsx'
import Program from './pages/Program.jsx'
import Shiurs from './pages/Shiurs.jsx'
import Donate from './pages/Donate.jsx'

import Mission from './pages/about/Mission.jsx'
import Location from './pages/about/Location.jsx'
import Photos from './pages/about/Photos.jsx'

import HostEvent from './pages/program/HostEvent.jsx'
import Schedule from './pages/program/Schedule.jsx'
import Calendar from './pages/program/Calendar.jsx'

import Administration from './pages/faculty/Administration.jsx'
import Staff from './pages/faculty/Staff.jsx'
import GuestSpeakers from './pages/faculty/GuestSpeakers.jsx'

import ThankYou from "./pages/ThankYou";

import ContactSuccess from "./pages/ContactSuccess";

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

        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/location" element={<Location />} />
        <Route path="/about/photos" element={<Photos />} />

        <Route path="/program/host-event" element={<HostEvent />} />
        <Route path="/program/schedule" element={<Schedule />} />
        <Route path="/program/calendar" element={<Calendar />} />

        <Route path="/faculty/administration" element={<Administration />} />
        <Route path="/faculty/staff" element={<Staff />} />
        <Route path="/faculty/guest-speakers" element={<GuestSpeakers />} />

        <Route path="/thank-you" element={<ThankYou />} />

        <Route path="/contact-success" element={<ContactSuccess />} />
        

      </Routes>
      
    </div>
  );
}

export default App;
