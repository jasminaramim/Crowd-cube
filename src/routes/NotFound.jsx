import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-4xl font-bold text-blue-500">404 - Page Not Found</h1>
      <p className="text-xl mt-4">Sorry, the page you are looking for doesn't exist.</p>
      <button
        onClick={goHome}
        className="mt-6 btn bg-blue-500 text-white hover:bg-blue-800"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
