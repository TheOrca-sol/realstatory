import usePageTitle from '../hooks/usePageTitle';
import ServicePackageCard from '../components/ServicePackageCard';
import { FaKey, FaBroom, FaTools } from 'react-icons/fa';

const conciergeriePackages = [
  {
    title: 'Essential',
    price: '15%',
    description: 'The basics covered for your peace of mind.',
    features: ['Keyholding', 'Mail Collection', 'Weekly Property Check', 'Emergency Contact'],
    featured: false,
  },
  {
    title: 'Premium',
    price: '€199/mo',
    description: 'Comprehensive management for your property.',
    features: ['All Essential features', 'Guest Welcome & Checkout', 'Professional Cleaning', 'Linen Service', 'Maintenance Coordination'],
    featured: true,
  },
  {
    title: 'Luxe',
    price: 'Custom',
    description: 'A fully bespoke service tailored to your exact needs.',
    features: ['All Premium features', 'Personalized Guest Experiences', 'Private Chauffeur', 'Stocking Fridge & Pantry', 'Event Planning'],
    featured: false,
  },
];

const ConciergeriePage = () => {
  usePageTitle('Conciergerie Services');

  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-text-main">Conciergerie Services</h1>
          <p className="text-text-light mt-4 text-lg max-w-3xl mx-auto">
            Enjoy your property without the hassle. Our professional conciergerie services ensure your home is perfectly maintained and ready for your arrival, whether for personal use or for your rental guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {conciergeriePackages.map((pkg, index) => (
            <ServicePackageCard key={index} pkg={pkg} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-20">
          <h2 className="text-4xl font-serif font-bold text-text-main">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 text-left">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaKey className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold font-serif mb-2">Peace of Mind</h3>
              <p className="text-text-light">We act as your trusted keyholder, providing regular checks and immediate response to any issues, ensuring your property is secure and well-maintained in your absence.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaBroom className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold font-serif mb-2">Impeccable Presentation</h3>
              <p className="text-text-light">From professional cleaning to high-quality linen services, we guarantee your property is always presented in pristine condition for you or your guests.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaTools className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold font-serif mb-2">Effortless Management</h3>
              <p className="text-text-light">We coordinate all necessary maintenance and repairs with our network of trusted professionals, saving you the time and stress of managing it yourself.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConciergeriePage; 
