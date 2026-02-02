
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Info */}
        <div className="col-span-1 md:col-span-2">
          <div className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
            <div className="bg-blue-600 w-8 h-8 rounded flex items-center justify-center text-white">D</div>
            <span>D-Co Management Services</span>
          </div>
          <p className="text-slate-400 mb-6 max-w-md">
            Dedicated to providing meticulous bookkeeping, strategic personal tax planning, and comprehensive estate management for individuals and small businesses in Mississauga and beyond.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-linkedin text-xl"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-facebook text-xl"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fa-brands fa-x-twitter text-xl"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link to="/book" className="hover:text-white">Book Consultation</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-location-dot mt-1 text-blue-500"></i>
              <span>Mississauga, ON L5M 2G8</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-blue-500"></i>
              <span>+1 (905) 555-0123</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-blue-500"></i>
              <span>info@dcomanagement.ca</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} D-Co Management Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
