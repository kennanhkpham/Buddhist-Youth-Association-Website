import React, { useState } from "react";

// The hardcoded password for authorization
const ADMIN_PASSWORD = "lotus009";

export default function Events() {
    // State to hold the list of events
    const [events, setEvents] = useState([
        { id: 1, title: "Chùa Sinh Hoạt", date: "Every Sunday from 12:00 - 3:30pm", description: "Our Buddhist Youth Asoociation meets up every sunday to Learn Vietnamese, Buddhism, and do activities that will benefit the members in the long run. " },]);

    // State to manage authorization for adding/editing events
    const [isAuthorized, setIsAuthorized] = useState(false);
    // State to toggle the visibility of the Add/Edit form area
    const [showAdminArea, setShowAdminArea] = useState(false);
    // State to control if Delete buttons are visible (Edit Mode)
    const [isEditMode, setIsEditMode] = useState(false);

    // State for the new event form inputs
    const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });
    const [passwordInput, setPasswordInput] = useState('');
    const [authError, setAuthError] = useState('');

    // --- Handlers ---

    const handlePasswordSubmit = (e, mode) => {
        e.preventDefault();
        if (passwordInput === ADMIN_PASSWORD) {
            setIsAuthorized(true);
            setAuthError('');
            if (mode === 'edit') {
                setIsEditMode(true);
                setShowAdminArea(false); 
            }
        } else {
            setAuthError('Incorrect password. Please try again.');
        }
        setPasswordInput('');
    };

    const handleToggleAdminArea = () => {
        setShowAdminArea(prev => !prev);
        setIsAuthorized(false); 
        setAuthError('');
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
        setNewEvent(prev => ({ ...prev, [name]: value }));
    };

    const handleEventSubmit = (e) => {
        e.preventDefault();
        if (newEvent.title && newEvent.date) {
            const newId = events.length ? events[events.length - 1].id + 1 : 1;
            setEvents(prevEvents => [
                ...prevEvents,
                { ...newEvent, id: newId }
            ]);
            setNewEvent({ title: '', date: '', description: '' });
            setIsAuthorized(false); 
            setShowAdminArea(false);
        }
    };
    
    const handleDeleteEvent = (id) => {
        if (window.confirm("Are you sure you want to delete this event? This action cannot be undone.")) {
            setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
        }
    };


    // --- Render Logic ---

    const renderEventList = () => (
        <div className="space-y-6">
            {events.map(event => (
                // Use flex-col for the container and ensure the title/button row is a separate flex row
                <div key={event.id} className="p-6 bg-white rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition duration-300">
                    
                    {/* The Title Row: Use flex to align title and button side-by-side */}
                    <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-bold text-green-800 mr-3">
                            {event.title}
                        </h3>
                        
                        {/* Conditional Delete Button: Placed next to the title */}
                        {isEditMode && (
                            <button
                                onClick={() => handleDeleteEvent(event.id)}
                                className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full hover:bg-red-600 transition duration-300 transform scale-90"
                                aria-label={`Delete ${event.title}`}
                            >
                                Delete
                            </button>
                        )}
                    </div>
                    
                    {/* Event Details */}
                    <p className="text-lg font-semibold text-yellow-600 mb-2">{event.date}</p>
                    <p className="text-gray-700">{event.description}</p>
                </div>
            ))}
        </div>
    );

    // renderPasswordForm and renderAddEventForm remain the same (omitted for brevity)
    const renderPasswordForm = (mode = 'add') => (
        <form 
            onSubmit={(e) => handlePasswordSubmit(e, mode)} 
            className="max-w-md mx-auto p-6 bg-yellow-50 border border-yellow-300 rounded-lg shadow-inner mt-8"
        >
            <h3 className="text-xl font-semibold mb-4 text-green-900">
                {mode === 'add' ? 'Authorize to Add Event' : 'Authorize to Edit/Delete'}
            </h3>
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
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                Submit Password
            </button>
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
                    <input type="time" id="starttime" name="starttime" value={newEvent.date} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
                    <label htmlFor="time" className="block text-gray-700 font-medium mb-1">End Time:</label>
                    <input type="time" id="endtime" name="endtime" value={newEvent.date} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
                </div>
                <div>
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Description:</label>
                    <textarea id="description" name="description" value={newEvent.description} onChange={handleInputChange} rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" />
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                    <button 
                        type="button" 
                        onClick={() => handleToggleAdminArea()}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="px-6 py-2 bg-yellow-500 text-green-900 font-bold rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
                    >
                        Add Event
                    </button>
                </div>
            </form>
        </div>
    );


    return (
        <div className="min-h-screen flex flex-col bg-gray-50 w-full overflow-x-hidden">
            
            {/* --- Main Event List Section --- */}
            <section className="flex-grow py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Event List */}
                    <h2 className="text-3xl font-bold mb-8 text-green-900 border-b-2 border-yellow-500 inline-block pb-1">
                        Current Schedule
                    </h2>
                    {renderEventList()}

                    {/* --- Admin Control Buttons --- */}
                    <div className="mt-12 text-center space-x-4">
                        
                        <button
                            onClick={handleToggleAdminArea}
                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
                        >
                            {showAdminArea && !isAuthorized ? 'Cancel' : 'Add Event (Admin)'}
                        </button>
                        
                        <button
                            onClick={handleToggleEditMode}
                            className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition duration-300 ${isEditMode ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-yellow-500 text-green-900 hover:bg-yellow-400'}`}
                        >
                            {isEditMode ? 'Exit Edit Mode' : 'Edit/Delete Events'}
                        </button>
                    </div>
                    
                    {/* --- Password Protection / Add Event Form / Edit Mode Password --- */}
                    
                    {showAdminArea && !isAuthorized && renderPasswordForm('add')}
                    
                    {showAdminArea && isAuthorized && renderAddEventForm()}

                    {isEditMode && !isAuthorized && renderPasswordForm('edit')}

                </div>
            </section>
        </div>
    );
}