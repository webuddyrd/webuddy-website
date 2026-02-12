import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="bg-webuddy-dark min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-md">
        <h1 className="text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-webuddy-blue to-webuddy-electric mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-webuddy-blue hover:text-white transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};
