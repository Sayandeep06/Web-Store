import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <header className="padding-x py-6 max-sm:py-4 absolute z-10 w-full bg-[#1D1D1F]/95 backdrop-blur-sm">
      <nav className="flex w-full justify-between items-center max-container">
        <a href="/" className="hover:opacity-70 transition-opacity max-sm:hidden">
          <img
            src={headerLogo}
            alt="Logo"
            width={120}
            height={25}
            className="object-contain brightness-0 invert"
          />
        </a>
        <ul className="flex items-center gap-16 sm:ml-auto max-sm:gap-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`font-montserrat leading-normal relative
                  text-gray-200 hover:text-white transition-colors duration-300
                  after:content-[''] after:absolute after:w-0 after:h-[2px] 
                  after:bg-white after:left-0 after:-bottom-2 
                  after:transition-all after:duration-300
                  hover:after:w-full
                  sm:text-base max-sm:text-sm
                  ${activeLink === item.label ? 'text-white after:w-full' : ''}`}
                onClick={() => setActiveLink(item.label)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;