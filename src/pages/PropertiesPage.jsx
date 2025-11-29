import { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import MapView from '../components/MapView'; // Import the new component
import propertiesData from '../data/properties.json';
import usePageTitle from '../hooks/usePageTitle';
import { FaList, FaMap } from 'react-icons/fa'; // Import icons

const allAmenities = [...new Set(propertiesData.flatMap(p => p.amenities))];

const PropertiesPage = () => {
  usePageTitle('All Properties');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 });
  const [bedrooms, setBedrooms] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [view, setView] = useState('grid'); // 'grid' or 'map'

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      const matchesType = filterType === 'all' || property.type === filterType;
      
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPrice = property.price_value >= priceRange.min && property.price_value <= priceRange.max;

      const matchesBedrooms = bedrooms === 0 || property.details.bedrooms >= bedrooms;

      const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every(amenity => property.amenities.includes(amenity));

      return matchesType && matchesSearch && matchesPrice && matchesBedrooms && matchesAmenities;
    });
  }, [searchTerm, filterType, priceRange, bedrooms, selectedAmenities]);

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity) 
        : [...prev, amenity]
    );
  };

  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-serif font-bold">Our Properties</h1>
          <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-sm">
            <button 
              onClick={() => setView('grid')}
              className={`px-4 py-2 rounded-md transition-colors ${view === 'grid' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <FaList />
            </button>
            <button 
              onClick={() => setView('map')}
              className={`px-4 py-2 rounded-md transition-colors ${view === 'map' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <FaMap />
            </button>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                id="search"
                type="text"
                placeholder="Title or location..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Type Select */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                id="type"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">Min Bedrooms</label>
              <select
                id="bedrooms"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={bedrooms}
                onChange={(e) => setBedrooms(Number(e.target.value))}
              >
                <option value="0">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="lg:col-span-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">€{priceRange.min.toLocaleString()}</span>
                <input
                  type="range"
                  min="0"
                  max="2000000"
                  step="50000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-gray-600">€{priceRange.max.toLocaleString()}</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="lg:col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {allAmenities.map(amenity => (
                  <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                    />
                    <span className="text-gray-700">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {view === 'grid' ? (
          filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <p className="text-center text-text-light text-lg">No properties found matching your criteria.</p>
          )
        ) : (
          <MapView properties={filteredProperties} />
        )}
      </div>
    </div>
  );
};

export default PropertiesPage; 