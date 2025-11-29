import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059ee41f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-6 py-40 relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif">Find Your Dream Home</h1>
        <p className="mt-4 text-lg md:text-xl font-sans">The best place to find your next property.</p>
        <Link
          to="/properties"
          className="mt-8 inline-block bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          View Properties
        </Link>
      </div>
    </div>
  );
};

export default Hero; 