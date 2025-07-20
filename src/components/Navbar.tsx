import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                Portfolio
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                Home
              </Link>
              <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/about' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                About
              </Link>
              <Link to="/projects" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/projects' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                Projects
              </Link>
              <Link to="/skills" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/skills' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                Skills
              </Link>
              <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/contact' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
              Home
            </Link>
            <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/about' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
              About
            </Link>
            <Link to="/projects" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/projects' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
              Projects
            </Link>
            <Link to="/skills" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/skills' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
              Skills
            </Link>
            <Link to="/contact" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/contact' ? 'bg-blue-600 text-white' : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;