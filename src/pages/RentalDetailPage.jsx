import { useParams, Link } from 'react-router-dom';
import rentals from '../data/rentals.json';
import NotFoundPage from './NotFoundPage';
import usePageTitle from '../hooks/usePageTitle';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const RentalDetailPage = () => {
  const { id } = useParams();
  const rental = rentals.find((r) => r.id === parseInt(id));

  usePageTitle(rental ? rental.title : 'Rental Not Found');

  if (!rental) {
    return <NotFoundPage />;
  }

  const bookedDays = rental.booked_dates.map(dateStr => new Date(dateStr));

  return (
    <div className="container mx-auto px-6 py-12">
      <Link to="/rentals" className="text-primary hover:underline font-semibold mb-6 inline-block">
        &larr; Back to All Rentals
      </Link>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img src={rental.image} alt={rental.title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-8" />
          <h1 className="text-4xl font-serif font-bold text-text-main">{rental.title}</h1>
          <p className="text-text-light mt-2 text-lg">{rental.location}</p>
          <p className="text-primary text-3xl font-bold mt-4">{rental.price}</p>
          {rental.airbnb_url && (
            <a 
              href={rental.airbnb_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 shadow-md transition-colors duration-300"
            >
              Book on Airbnb
            </a>
          )}
        </div>
        <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">Availability</h2>
          <DayPicker
            mode="multiple"
            min={1}
            disabled={bookedDays}
            modifiers={{ booked: bookedDays }}
            modifiersStyles={{
              booked: { color: 'white', backgroundColor: '#EF4444' },
              disabled: { color: 'white', backgroundColor: '#EF4444' }
            }}
            styles={{
              caption: { color: '#1A4731' },
              head: { color: '#1A4731' },
            }}
          />
          <p className="mt-6 text-text-light text-center">
            Dates in red are unavailable. 
            {!rental.airbnb_url && " Please contact us to book available dates."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RentalDetailPage; 