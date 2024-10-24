import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { About, Home, Contact, Education, Projects, Experience } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-800 via-purple-800 to-black">
        <Navbar />
        <main className="flex-grow p-4 text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




