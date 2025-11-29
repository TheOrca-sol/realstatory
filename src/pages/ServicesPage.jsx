import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const ServicesPage = () => {
  usePageTitle('Our Services');
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-serif font-bold mb-4">Conciergerie</h2>
            <p className="text-text-light mb-6">
              We offer a full range of conciergerie services to make your life easier. From key handling to cleaning and guest check-ins, we've got you covered.
            </p>
            <Link to="/services/conciergerie" className="text-primary hover:underline font-semibold">
              Learn More &rarr;
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-serif font-bold mb-4">Automation</h2>
            <p className="text-text-light mb-6">
              Automate your property management with our cutting-edge solutions. We provide services for dynamic pricing, self-check-in systems, and automated guest messaging.
            </p>
            <Link to="/services/automation" className="text-primary hover:underline font-semibold">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 