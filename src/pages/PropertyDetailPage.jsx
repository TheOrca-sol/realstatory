import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import properties from '../data/properties.json';
import NotFoundPage from './NotFoundPage';
import usePageTitle from '../hooks/usePageTitle';
import { FaBed, FaBath, FaRulerCombined, FaCheck } from 'react-icons/fa';
import MortgageCalculator from '../components/MortgageCalculator';
import RequestViewingModal from '../components/RequestViewingModal'; // Import the modal

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  usePageTitle(property ? property.title : 'Property Not Found');

  if (!property) {
    return <NotFoundPage />;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    className: 'slick-theme-custom'
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Link to="/properties" className="text-primary hover:underline font-semibold mb-6 inline-block">
        &larr; Back to Listings
      </Link>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <Slider {...sliderSettings}>
            {property.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${property.title} ${index + 1}`} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg" />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h1 className="text-4xl font-serif font-bold text-text-main">{property.title}</h1>
          <p className="text-text-light mt-2 text-lg">{property.location}</p>
          <p className="text-primary text-3xl font-bold mt-4">{property.price}</p>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-bold mb-4">Details</h2>
            <div className="flex items-center text-text-light mt-4 space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <FaBed className="text-primary" />
                <span>{property.details.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBath className="text-primary" />
                <span>{property.details.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRulerCombined className="text-primary" />
                <span>{property.details.area} sqft</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-serif font-bold mb-4">Description</h2>
        <p className="text-text-light leading-relaxed">{property.description}</p>
      </div>

      {property.virtual_tour_url && (
        <div className="mt-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Virtual Tour</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={property.virtual_tour_url}
              title="Virtual Tour"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {property.floor_plan_url && (
        <div className="mt-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Floor Plan</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src={property.floor_plan_url} alt="Floor Plan" className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}

      {property.amenities && property.amenities.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Amenities</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-text-light">
            {property.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center space-x-3">
                <FaCheck className="text-primary" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {property.coordinates && (
        <div className="mt-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Location</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <MapContainer center={property.coordinates} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={property.coordinates}></Marker>
            </MapContainer>
          </div>
        </div>
      )}

      {property.type === 'sale' && (
        <div className="mt-12">
          <MortgageCalculator propertyPrice={property.price_value} />
        </div>
      )}

      <div className="mt-12 text-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white font-bold py-4 px-10 rounded-lg hover:bg-opacity-90 shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Request a Viewing
        </button>
      </div>

      <RequestViewingModal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        property={property}
      />
    </div>
  );
};

export default PropertyDetailPage; 