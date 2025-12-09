import React, { useState } from "react";
import "/src/App.css";
import hoaSen from "./pictures/hoa_sen.png"; // ✅ import the image
import Apply from "./components/Apply.jsx";
import Activities from "./components/Activites.jsx";
import Photos from "./components/Photos.jsx";
import Volunteer from "./components/Volunteer.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from "/src/Carousel.jsx";

// --- Inlined Events section (moved from src/components/Events.jsx) ---
const ADMIN_PASSWORD = "lotus009";

function EventsSection() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Chùa Sinh Hoạt",
      date: "Every Sunday from 12:00 - 3:30pm",
      description:
        "Our Buddhist Youth Asoociation meets up every sunday to Learn Vietnamese, Buddhism, and do activities that will benefit the members in the long run. ",
    },
  ]);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showAdminArea, setShowAdminArea] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [newEvent, setNewEvent] = useState({ title: "", date: "", starttime: "", endtime: "", description: "" });
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handlePasswordSubmit = (e, mode) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthorized(true);
      setAuthError("");
      if (mode === "edit") {
        setIsEditMode(true);
        setShowAdminArea(false);
      }
    } else {
      setAuthError("Incorrect password. Please try again.");
    }
    setPasswordInput("");
  };

  const handleToggleAdminArea = () => {
    setShowAdminArea((prev) => !prev);
    setIsAuthorized(false);
    setAuthError("");
  };

  const handleToggleEditMode = () => {
    if (isEditMode) {
      setIsEditMode(false);
      setIsAuthorized(false);
      setShowAdminArea(false);
    } else {
      setShowAdminArea(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      const newId = events.length ? events[events.length - 1].id + 1 : 1;
      setEvents((prevEvents) => [...prevEvents, { ...newEvent, id: newId }]);
      setNewEvent({ title: "", date: "", starttime: "", endtime: "", description: "" });
      setIsAuthorized(false);
      setShowAdminArea(false);
    }
  };

  const promptDelete = (id) => {
    const target = events.find((ev) => ev.id === id) || null;
    setDeleteTarget(target);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== deleteTarget.id));
    setShowDeleteModal(false);
    setDeleteTarget(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteTarget(null);
  };

  const renderEventList = () => (
    <div className="space-y-6">
      {events.map((event) => (
        <div key={event.id} className="p-6 bg-white rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-2">
            <h3 className="text-2xl font-bold text-green-800 mr-3">{event.title}</h3>
            {isEditMode && (
              <button
                onClick={() => promptDelete(event.id)}
                className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full hover:bg-red-600 transition duration-300 transform scale-90"
                aria-label={`Delete ${event.title}`}
              >
                Delete
              </button>
            )}
          </div>
          <p className="text-lg font-semibold text-yellow-600 mb-2">{event.date}{event.starttime && ` • ${event.starttime}${event.endtime ? ' - ' + event.endtime : ''}`}</p>
          <p className="text-gray-700">{event.description}</p>
        </div>
      ))}
    </div>
  );

  const renderPasswordForm = (mode = "add") => (
    <form onSubmit={(e) => handlePasswordSubmit(e, mode)} className="max-w-md mx-auto p-6 bg-yellow-50 border border-yellow-300 rounded-lg shadow-inner mt-8">
      <h3 className="text-xl font-semibold mb-4 text-green-900">{mode === "add" ? "Authorize to Add Event" : "Authorize to Edit/Delete"}</h3>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password:</label>
        <input
          type="password"
          id="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      {authError && <p className="text-red-500 text-sm mb-4">{authError}</p>}
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">Submit Password</button>
    </form>
  );

  const renderAddEventForm = () => (
    <div className="mt-8 p-8 bg-green-50 rounded-lg shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-green-800 border-b pb-2">Add New Event</h2>
      <form onSubmit={handleEventSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-1">Event Title:</label>
          <input type="text" id="title" name="title" value={newEvent.title} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
        </div>
        <div>
          <label htmlFor="date" className="block text-gray-700 font-medium mb-1">Date:</label>
          <input type="text" id="date" name="date" value={newEvent.date} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
        </div>
        <div>
          <label htmlFor="time" className="block text-gray-700 font-medium mb-1">Start Time:</label>
          <input type="time" id="starttime" name="starttime" value={newEvent.starttime} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
          <label htmlFor="time" className="block text-gray-700 font-medium mb-1">End Time:</label>
          <input type="time" id="endtime" name="endtime" value={newEvent.endtime} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Description:</label>
          <textarea id="description" name="description" value={newEvent.description} onChange={handleInputChange} rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" />
        </div>
        <div className="flex justify-end space-x-4 pt-4">
          <button type="button" onClick={() => handleToggleAdminArea()} className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300">Cancel</button>
          <button type="submit" className="px-6 py-2 bg-yellow-500 text-green-900 font-bold rounded-lg shadow-md hover:bg-yellow-400 transition duration-300">Add Event</button>
        </div>
      </form>
    </div>
  );

  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full overflow-x-hidden">
      <section className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-900 border-b-2 border-yellow-500 inline-block pb-1">{t('events.title')}</h2>
          {renderEventList()}

          <div className="mt-12 text-center space-x-4">
            <button onClick={handleToggleAdminArea} className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300">{showAdminArea && !isAuthorized ? 'Cancel' : 'Add Event (Admin)'}</button>
            <button onClick={handleToggleEditMode} className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition duration-300 ${isEditMode ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-yellow-500 text-green-900 hover:bg-yellow-400'}`}>{isEditMode ? 'Exit Edit Mode' : 'Edit/Delete Events'}</button>
          </div>

          {showAdminArea && !isAuthorized && renderPasswordForm('add')}
          {showAdminArea && isAuthorized && renderAddEventForm()}
          {isEditMode && !isAuthorized && renderPasswordForm('edit')}
          {/* Delete confirmation modal */}
          {showDeleteModal && deleteTarget && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Confirm Delete</h3>
                <p className="mb-6">Are you sure you want to delete the event <strong>{deleteTarget.title}</strong>? This action cannot be undone.</p>
                <div className="flex justify-end space-x-3">
                  <button onClick={cancelDelete} className="px-4 py-2 border rounded-lg">Cancel</button>
                  <button onClick={confirmDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg">Delete</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}



export default function App() {
  return (
    <LanguageProvider>
      {/* Wrap the entire application content with <Router> */}
      <Router>
        {/* The main container div remains, but the content inside will be rendered based on the route */}
        <div className="min-h-screen flex flex-col bg-white w-full overflow-x-hidden">
        {/* Header Section (remains visible on all routes) */}
        <HeaderArea hoaSen={hoaSen} />
        <Routes>
          <Route path="/" element={<><Carousel /><EventsSection /></>} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

function HeaderArea({ hoaSen }) {
  const { t, lang, setLang } = useLanguage();

  const toggleLang = () => setLang((l) => (l === 'en' ? 'vi' : 'en'));

  return (
    <header className="relative bg-green-900 text-white text-center py-4 w-full">

      <Link to="/" className="text-white hover:text-white hover:no-underline block">
        <div className="flex justify-center mb-3 mt-2">
          <img src={hoaSen} alt="Gia Đình Phật Tử Từ Đàm Logo" className="hoa_sen" />
        </div>
      </Link>

      <h1 className="text-2xl font-bold tracking-wide">{t('headerTitle')}</h1>
      <p className="subtitle-below">{t('subtitle')}</p>

      <nav className="flex justify-center mt-4 space-x-6 text-sm font-medium">
        <Link to="/apply" className="hover:text-yellow-300">{t('nav.apply')}</Link>
        <Link to="/about" className="hover:text-yellow-300">{t('nav.about')}</Link>
        <Link to="/volunteer" className="hover:text-yellow-300">{t('nav.volunteer')}</Link>
        <Link to="/activities" className="hover:text-yellow-300">{t('nav.activities')}</Link>
        <Link to="/photos" className="hover:text-yellow-300">{t('nav.photos')}</Link>
      </nav>
    </header>
  );
}