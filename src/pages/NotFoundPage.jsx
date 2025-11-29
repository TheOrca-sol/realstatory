import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const NotFoundPage = () => {
  usePageTitle('404 Not Found');
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-8 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage; 