import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <FaQuoteLeft className="text-4xl text-primary mb-4" />
      <p className="text-text-light italic leading-relaxed mb-6">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <img src={testimonial.avatar} alt={testimonial.author} className="w-16 h-16 rounded-full mr-4 border-2 border-primary p-1" />
        <div>
          <p className="font-bold text-lg text-text-main">{testimonial.author}</p>
          <p className="text-text-light">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 