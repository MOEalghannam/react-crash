import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-#14161b border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left side of Navbar */}
          <div className="flex items-center">
            {/* Logo */}
            {/* <a href="/index.html">
              
            </a> */}
            <img
                className="h-10 w-auto mr-4"
                src={logo}
                alt="Simworld logo"
              />
          </div>

          {/* Right side of Navbar (Title) */}
          <div className="flex items-center">
            {/* Empty space to push title to the right */}
            <div className="flex-grow"></div>
            
            {/* Title */}
            <h1 className="text-white text-2xl font-bold">عالم المحاكاة</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
