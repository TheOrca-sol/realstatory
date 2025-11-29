import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import properties from '../data/properties.json';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const HomePage = () => {
  usePageTitle('Welcome');
  const featuredProperties = properties.slice(0, 3);

  return (
    <div>
      <Hero />
      <div className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link 
              to="/properties"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 shadow-lg transition-transform transform hover:scale-105"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 