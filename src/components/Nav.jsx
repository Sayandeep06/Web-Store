import { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import Sidebar from './Sidebar';

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Prevent scrolling when sidebar is open
    document.body.style.overflow = isSidebarOpen ? 'auto' : 'hidden';
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <header className="padding-x py-4 absolute z-10 w-full bg-[#1D1D1F]/95 backdrop-blur-sm">
      <nav className="flex w-full justify-between items-center max-container">
        <a href="/" className="hover:opacity-70 transition-opacity">
          <img
            src={headerLogo}
            alt="Logo"
            width={120}
            height={25}
            className="object-contain brightness-0 invert"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`font-montserrat leading-normal text-base relative
                  text-gray-200 hover:text-white transition-colors duration-300
                  after:content-[''] after:absolute after:w-0 after:h-[2px] 
                  after:bg-white after:left-0 after:-bottom-2 
                  after:transition-all after:duration-300
                  hover:after:w-full
                  ${activeLink === item.label ? 'text-white after:w-full' : ''}`}
                onClick={() => setActiveLink(item.label)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <img
              src={hamburger}
              alt="Menu"
              width={24}
              height={24}
              className="brightness-0 invert"
            />
          </button>
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      </nav>
      
      
      {/* 
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-end p-20">
          <button
            onClick={toggleSidebar}
            className="text-slate-800 font-bold text-lg"
          >
            Close ✖️
          </button>
        </div>
        <ul className="flex flex-col items-center gap-5 mt-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={toggleSidebar}
                className="font-montserrat font-semibold leading-normal text-lg text-slate-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </header>
  );
};

export default Nav;