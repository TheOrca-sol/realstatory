import ContactForm from '../components/ContactForm';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import usePageTitle from '../hooks/usePageTitle';

const ContactPage = () => {
  usePageTitle('Contact Us');
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold text-center mb-12">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Get in Touch</h2>
              <p className="text-text-light leading-relaxed">
                Have a question or want to work with us? Fill out the form, and we'll get back to you as soon as possible. We are always happy to help.
              </p>
            </div>
            <div className="flex items-center text-lg">
              <FaMapMarkerAlt className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
              <span>123 Real Estate St, Paris, France</span>
            </div>
            <div className="flex items-center text-lg">
              <FaEnvelope className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
              <span>contact@realstatory.com</span>
            </div>
            <div className="flex items-center text-lg">
               <FaWhatsapp className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
               <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Send a Message</h2>
            <ContactForm formspreeId="YOUR_FORMSPREE_ID" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 