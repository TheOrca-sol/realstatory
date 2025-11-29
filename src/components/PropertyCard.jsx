import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <img src={property.images[0]} alt={property.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-text-main">{property.title}</h3>
        <p className="text-text-light mt-2">{property.location}</p>
        <p className="text-primary text-xl font-bold mt-4">€{property.price}</p>
        
        <div className="flex items-center text-text-light mt-4 space-x-4">
          <div className="flex items-center space-x-2">
            <FaBed className="text-primary" />
            <span>{property.details.bedrooms} Beds</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaBath className="text-primary" />
            <span>{property.details.bathrooms} Baths</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRulerCombined className="text-primary" />
            <span>{property.details.area} sqft</span>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <Link 
            to={`/property/${property.id}`}
            className="inline-block bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 shadow-md transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard; 