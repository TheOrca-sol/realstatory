import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'Short-Term Rentals', path: '/rentals' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-primary font-serif">
            RealStatory
          </NavLink>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-main focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `my-1 text-lg font-sans font-medium ${
                    isActive
                      ? 'text-primary'
                      : 'text-text-light hover:text-primary'
                  } md:mx-4 md:my-0 transition-colors duration-300`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 