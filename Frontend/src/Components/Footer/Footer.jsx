import React from 'react';
import { Link } from "react-router-dom";
import whitelogo from '../../Assests/white logo.png'

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gradient-to-t from-black to-blue-950">
      <div className="container px-6 mx-auto md:px-12">
        <div className="flex flex-col items-center justify-between md:flex-row md:space-x-12">
          {/* Left Section */}
          <div className="mb-8 text-center md:mb-0 md:text-left">
            <h3 className="text-3xl font-semibold tracking-wide text-shadow-lg">KLOSET PVT(Ltd)</h3>
            <p className="mt-2 text-lg">The world largest online fashion space.</p>
            <div className="flex justify-center mt-4 space-x-6 md:justify-start">
              <a href="/" className="text-2xl transition-all duration-300 hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="text-2xl transition-all duration-300 hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="text-2xl transition-all duration-300 hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="text-2xl transition-all duration-300 hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Middle Section for Logo */}
         <div className="pr-20 mb-8 md:mb-0">
         <Link to={'/'}>
            <img
              src={whitelogo} // Sample logo placeholder URL
              alt="Logo"
              className="w-48 h-48 mx-auto md:mx-0"
            /></Link>
          </div>
          

          {/* Right Section */}
          <div className="flex flex-col text-center md:flex-row md:space-x-12 md:text-left">
            <ul className="mb-8 md:mb-0">
              <li className="mb-3"><a href="/" className="transition-all duration-300 hover:text-gray-200">About Us</a></li>
              <li className="mb-3"><a href="/" className="transition-all duration-300 hover:text-gray-200">Shop</a></li>
              <li className="mb-3"><a href="/" className="transition-all duration-300 hover:text-gray-200">Contact</a></li>
            </ul>

            <ul className="mb-8 md:mb-0">
              <li className="mb-3"><a href="/" className="transition-all duration-300 hover:text-gray-200">Privacy Policy</a></li>
              <li className="mb-3"><a href="/" className="transition-all duration-300 hover:text-gray-200">Terms of Service</a></li>
              <li className="mb-3"><a href="/" className="transition-all duration-300 hover:text-gray-200">Return Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t-2 border-gray-200">
          <p className="text-sm">&copy; 2024 KLOSET Group. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed by <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" className="text-gray-200 hover:text-white">Moda Ravindu Vidurusinghe</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
