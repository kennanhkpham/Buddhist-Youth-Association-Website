import React from "react";
import "/src/App.css";
import phatdanImg from "./pictures/2024phatdan1.png"; // ✅ import the image
import hoaSen from "./pictures/hoa_sen.png"; // ✅ import the image
import Apply from "./components/Apply.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function App() {
  return (
    // Wrap the entire application content with <Router>
    <Router>
      {/* The main container div remains, but the content inside will be rendered based on the route */}
      <div className="min-h-screen flex flex-col bg-white w-full overflow-x-hidden">
        {/* Header Section (remains visible on all routes) */}
        <header className="bg-green-900 text-white text-center py-4 w-full">
          <div  className="flex justify-center mb-3 mt-2">

              <img
                src={hoaSen} //hoa sen logo
                alt="Gia Đình Phật Tử Từ Đàm Logo"
                  // --- UPDATED CLASSES BELOW ---
                className = "hoa_sen"
              />

          </div>

          <h1 className="text-2xl font-bold tracking-wide">
            GIA ĐÌNH PHẬT TỬ TỪ ĐÀM
          </h1>
          <p className="italic text-lg mt-1">BI - TRÍ - DŨNG</p>

          <nav className="flex justify-center mt-4 space-x-6 text-sm font-medium">
            {/* The "Apply to Join" uses <Link> to navigate to the "/apply" path */}
            <Link to="/apply" className="hover:text-yellow-300">
                Apply to Join
            </Link>
            {/* Other links can be converted to <Link> if they are to internal components */}
            <a href="./components/About.jsx" className="hover:text-yellow-300">About Us</a>
            <a href="./components/Events.jsx" className="hover:text-yellow-300">Upcoming Events</a>
            <a href="./components/Volunteer.jsx" className="hover:text-yellow-300">Volunteer</a>
            <a href="./components/Activities" className="hover:text-yellow-300">Activities</a>
            <a href="./components/Photos.jsx" className="hover:text-yellow-300">Photo Gallery</a>
          </nav>
        </header>

        {/* Routes Section: This is where React Router decides which component to render */}
        <Routes>
          {/* 1. The default (home) route "/" renders the original content (Hero Image) */}
          <Route path="/" element={
            <section className="relative w-full flex-grow">
              <img
                src={phatdanImg}
                alt="Temple Event"
                className="w-full h-[calc(100vh-150px)] object-cover" // ✅ fills rest of viewport
              />
            </section>
          } />
          
          {/* 2. The "/apply" route renders the Apply component */}
          <Route path="/apply" element={<Apply />} />
          
          {/* Add other routes here as you convert more pages */}
        </Routes>
      </div>
    </Router>
  );
}