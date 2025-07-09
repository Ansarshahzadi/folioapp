import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Contact from './pages/contact/Contact';
import Homepage from './pages/home/Homepage';
import Project from './pages/projects/Project';
import Services from './pages/services/Services';
import Skills from './pages/skills/Skills';
import Testimonial from './pages/testimonial/Testimonial';
import { Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
