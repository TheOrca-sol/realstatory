import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RentalCard = ({ rental }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <img src={rental.image} alt={rental.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-text-main">{rental.title}</h3>
        <p className="text-text-light mt-2">{rental.location}</p>
        <p className="text-primary text-xl font-bold mt-4">{rental.price}</p>
        <div className="mt-auto pt-4">
          <Link
            to={`/rentals/${rental.id}`}
            className="inline-block bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 shadow-md transition-colors duration-300 mr-2"
          >
            View Details
          </Link>
          {rental.airbnb_url && (
            <a
              href={rental.airbnb_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold transition-colors duration-300"
            >
              View on Airbnb
            </a>
          )}
          {rental.booking_link && (
            <a href={rental.booking_link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold transition-colors duration-300">
              View on Booking.com
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RentalCard; 