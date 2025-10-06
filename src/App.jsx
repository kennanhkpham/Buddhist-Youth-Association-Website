import React from "react";
import "./App.css";
import phatdanImg from "./pictures/2024phatdan1.png"; // ✅ import the image

export default function App() {
  return (
    // FIX: Replaced w-full with w-screen to force the container to fill 100% of the viewport width.
    <div className="min-h-screen flex flex-col bg-white w-screen">
      {/* Header Section - Changed py-6 to py-4 for reduced padding to match the reference image */}
      <header className="bg-green-900 text-white text-center py-4">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img
            src="/logo.png" // ✅ keep in public/logo.png
            alt="Gia Đình Phật Tử Từ Đàm Logo"
            className="h-10 w-10"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold tracking-wide">
          GIA ĐÌNH PHẬT TỬ TỪ ĐÀM
        </h1>
        <p className="italic text-lg mt-1">BI - TRÍ - DŨNG</p>

        {/* Navigation Bar */}
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
      <section className="relative w-full">
        <img
          src={phatdanImg} //
          alt="Temple Event"
          className="w-full h-[500px] object-cover"
        />
      </section>
    </div>
  );
}