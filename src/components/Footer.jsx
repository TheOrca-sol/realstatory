import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-text-main text-white">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-secondary mb-4 md:mb-0">&copy; {new Date().getFullYear()} RealStatory. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-300">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 