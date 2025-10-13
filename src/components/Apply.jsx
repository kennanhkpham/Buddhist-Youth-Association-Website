import React from "react";
import hoaSen from "../pictures/hoa_sen.png";

const GOOGLE_FORM_EMBED_URL = "https://forms.gle/9CDAueoPopTHWS3Y7"; 

export default function Apply() {
  return (
    // Outer container for the page
    <div className="min-h-screen flex flex-col bg-gray-50 w-full overflow-x-hidden">
      
      
      {/* --- Main Content Area (Google Form Embed) --- */}
      <section className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white p-2 sm:p-4 md:p-6 rounded-lg shadow-2xl">
          
          <h2 className="text-2xl font-bold mb-4 text-green-800 border-b pb-2">
              GĐPT Registration Form
          </h2>
          <p className="text-green-200 mt-2 text-lg">
            We welcome individuals who are interested in
             deepening their spiritual practice and becoming 
             a part of our vibrant community. By joining our temple,
              you will have the opportunity to engage in meaningful 
              activities, learn Buddhist teachings, and contribute 
              to the well-being of our community. We invite you to apply 
              and begin your spiritual journey with us.
          </p>

    
          <iframe
            title="GĐPT Registration Form"
            src={GOOGLE_FORM_EMBED_URL}
            width="100%"
            height="1500px" // Adjust this height as needed to show the whole form without excessive scrolling
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full"
          >
            Loading...
          </iframe>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            A copy of your responses will be emailed to the address you provided.
          </p>
        </div>
      </section>
    </div>
  );
}