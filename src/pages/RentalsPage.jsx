import RentalCard from '../components/RentalCard';
import rentals from '../data/rentals.json';
import BookingRequestForm from '../components/BookingRequestForm';
import usePageTitle from '../hooks/usePageTitle';

const RentalsPage = () => {
  usePageTitle('Short-Term Rentals');
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold text-center mb-12">Short-Term Rentals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentals.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
        <div className="mt-20 md:w-2/3 lg:w-1/2 mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-4">Manual Booking Request</h2>
          <p className="text-center text-text-light mb-8">
            If you can't find what you're looking for on the platforms above, or for any special inquiries, please send us a request.
          </p>
          <BookingRequestForm formspreeId="YOUR_FORMSPREE_ID" />
        </div>
      </div>
    </div>
  );
};

export default RentalsPage; 