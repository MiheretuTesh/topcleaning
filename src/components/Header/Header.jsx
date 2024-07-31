import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookCallClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-20 w-20" />
        </div>
        <div className="hidden md:flex space-x-8 font-bold">
          <Link to="/" className="text-black hover:text-gray-600">
            Home
          </Link>
          <Link to="/services" className="text-black hover:text-gray-600">
            Our Work
          </Link>
          <Link to="/about" className="text-black hover:text-gray-600">
            About Us
          </Link>
        </div>
        <div>
          <button
            onClick={handleBookCallClick}
            className="bg-[#3461FF] text-white px-5 py-3 rounded-3xl"
          >
            Book a Call
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white w-full max-w-3xl h-4/5 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full">
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <iframe
                src="https://cal.com/miheretutd/30min"
                title="Cal.com Scheduling"
                className="w-full h-full border-none"
                allow="geolocation; microphone; camera"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
