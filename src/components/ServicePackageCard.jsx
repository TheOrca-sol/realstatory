import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const ServicePackageCard = ({ pkg, index }) => {
  const isFeatured = pkg.featured;

  return (
    <motion.div
      className={`relative border-2 rounded-xl p-8 flex flex-col ${isFeatured ? 'border-primary' : 'border-gray-200'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {isFeatured && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Most Popular</span>
        </div>
      )}
      
      <h3 className="text-2xl font-serif font-bold text-center text-text-main">{pkg.title}</h3>
      <p className="text-4xl font-bold text-center text-primary my-4">{pkg.price}</p>
      <p className="text-center text-text-light mb-8">{pkg.description}</p>
      
      <ul className="space-y-4 mb-8 flex-grow">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <FaCheckCircle className="text-primary w-5 h-5 mr-3 mt-1 flex-shrink-0" />
            <span className="text-text-light">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 ${isFeatured ? 'bg-primary text-white hover:bg-opacity-90' : 'bg-gray-100 text-primary hover:bg-gray-200'}`}>
        Choose Plan
      </button>
    </motion.div>
  );
};

export default ServicePackageCard; 