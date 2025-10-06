import React from "react";
import "./App.css";
import phatdanImg from "./pictures/2024phatdan1.png"; // ✅ import the image
import hoaSen from "./pictures/hoa_sen.png"; // ✅ import the image


export default function App() {
  return (
    // ✅ Use w-full, and make sure body/html have no margin
    <div className="min-h-screen flex flex-col bg-white w-full overflow-x-hidden">
      {/* Header Section */}
      <header className="bg-green-900 text-white text-center py-4 w-full">
        <div  className="flex justify-center mb-3 mt-2">
          <img
            src={hoaSen} //hoa sen logo
            alt="Gia Đình Phật Tử Từ Đàm Logo"
            className="h-12 w-12 rounded-full object-contain"
          />
        </div>

        <h1 className="text-2xl font-bold tracking-wide">
          GIA ĐÌNH PHẬT TỬ TỪ ĐÀM
        </h1>
        <p className="italic text-lg mt-1">BI - TRÍ - DŨNG</p>

        <nav className="flex justify-center mt-4 space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-yellow-300">Apply to Join</a>
          <a href="#" className="hover:text-yellow-300">About Us</a>
          <a href="#" className="hover:text-yellow-300">Upcoming Events</a>
          <a href="#" className="hover:text-yellow-300">Volunteer</a>
          <a href="#" className="hover:text-yellow-300">Activities</a>
          <a href="#" className="hover:text-yellow-300">Photo Gallery</a>
        </nav>
      </header>

      {/* Hero Image Section */}
      <section className="relative w-full flex-grow">
        <img
          src={phatdanImg}
          alt="Temple Event"
          className="w-full h-[calc(100vh-150px)] object-cover" // ✅ fills rest of viewport
        />
      </section>
    </div>
  );
}
