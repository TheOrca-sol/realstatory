import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';

// Fix for default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapView = ({ properties }) => {
  const center = [48.8566, 2.3522]; // Default center to Paris

  return (
    <MapContainer center={center} zoom={5} style={{ height: '500px', width: '100%' }} className="rounded-lg shadow-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {properties.map(property => (
        <Marker key={property.id} position={[property.coordinates.lat, property.coordinates.lng]}>
          <Popup>
            <div className="w-48">
              <img src={property.images[0]} alt={property.title} className="w-full h-24 object-cover rounded-md" />
              <h4 className="font-bold my-2">{property.title}</h4>
              <p className="text-sm text-gray-600">{property.price}</p>
              <Link to={`/property/${property.id}`} className="text-primary hover:underline text-sm font-semibold mt-2 inline-block">
                View Details &rarr;
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView; 