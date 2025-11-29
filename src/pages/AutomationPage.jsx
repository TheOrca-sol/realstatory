import usePageTitle from '../hooks/usePageTitle';
import ServicePackageCard from '../components/ServicePackageCard';
import { FaLightbulb, FaThermometerHalf, FaLock } from 'react-icons/fa';

const automationPackages = [
  {
    title: 'Starter Smart Home',
    price: 'From €1,500',
    description: 'Begin your smart home journey with essential automation.',
    features: ['Smart Lighting (3 rooms)', 'Smart Thermostat', 'Voice Control Hub (e.g., Google Home/Alexa)', 'Professional Installation'],
    featured: false,
  },
  {
    title: 'Advanced Security',
    price: 'From €3,500',
    description: 'Secure and monitor your property from anywhere.',
    features: ['All Starter features', 'Smart Door Locks', 'Video Doorbell', 'Security Cameras (2)', 'Automated Blinds/Shades'],
    featured: true,
  },
  {
    title: 'Total Automation',
    price: 'Contact Us',
    description: 'A completely integrated smart home experience.',
    features: ['All Advanced features', 'Multi-room Audio System', 'Smart Appliance Integration', 'Custom Scene Creation', 'Full Home Network Setup'],
    featured: false,
  },
];

const AutomationPage = () => {
  usePageTitle('Home Automation');

  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-text-main">Home Automation Solutions</h1>
          <p className="text-text-light mt-4 text-lg max-w-3xl mx-auto">
            Upgrade your property with state-of-the-art smart home technology. Enhance security, save energy, and add a touch of modern luxury that attracts high-value tenants and buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {automationPackages.map((pkg, index) => (
            <ServicePackageCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        <div className="text-center mt-20">
          <h2 className="text-4xl font-serif font-bold text-text-main">The Future of Living</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 text-left">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaLightbulb className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold font-serif mb-2">Energy Efficiency</h3>
              <p className="text-text-light">Automated thermostats and smart lighting reduce energy consumption, lowering utility bills and making your property more environmentally friendly.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaLock className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold font-serif mb-2">Unmatched Security</h3>
              <p className="text-text-light">Monitor your property remotely with smart locks, cameras, and sensors. Grant temporary access to guests or service providers without needing to be there.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaThermometerHalf className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold font-serif mb-2">Ultimate Convenience</h3>
              <p className="text-text-light">Control lighting, temperature, and security with a single tap or voice command. Create custom scenes to set the perfect ambiance for any occasion.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AutomationPage; 