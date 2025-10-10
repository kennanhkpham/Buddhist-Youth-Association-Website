import React from "react";
import "/src/App.css";
import phatdanImg from "./pictures/2024phatdan1.png"; // ✅ import the image
import hoaSen from "./pictures/hoa_sen.png"; // ✅ import the image
import Apply from "./components/Apply.jsx";
import Activities from "./components/Activites.jsx";
import Events from "./components/Events.jsx";
import Photos from "./components/Photos.jsx";
import Volunteer from "./components/Volunteer.jsx";
import About from "./components/About.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from "/src/Carousel.jsx";



export default function App() {
  return (
    // Wrap the entire application content with <Router>
    <Router>
      {/* The main container div remains, but the content inside will be rendered based on the route */}
      <div className="min-h-screen flex flex-col bg-white w-full overflow-x-hidden">
        {/* Header Section (remains visible on all routes) */}
        <header className="bg-green-900 text-white text-center py-4 w-full">
          
          <Link to="/" className="text-white hover:text-white hover:no-underline block">
            <div  className="flex justify-center mb-3 mt-2">
                <img
                  src={hoaSen} //hoa sen logo
                  alt="Gia Đình Phật Tử Từ Đàm Logo"
                  className = "hoa_sen"
                />
            </div>
          </Link>
          
          <h1 className="text-2xl font-bold tracking-wide">
              GIA ĐÌNH PHẬT TỬ TỪ ĐÀM
            </h1>
            <p className="subtitle-below">BI - TRÍ - DŨNG</p>

          <nav className="flex justify-center mt-4 space-x-6 text-sm font-medium">
            <Link to="/apply" className="hover:text-yellow-300">Apply to Join</Link>
            <Link to="/events" className="hover:text-yellow-300">Upcoming Events</Link>
            <Link to="/about" className="hover:text-yellow-300">About Us</Link>
            <Link to="/volunteer" className="hover:text-yellow-300">Volunteer</Link>
            <Link to="/activities" className="hover:text-yellow-300">Activities</Link>
            <Link to="/photos" className="hover:text-yellow-300">Photo Gallery</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      

      </div>
    </Router>
  );
}