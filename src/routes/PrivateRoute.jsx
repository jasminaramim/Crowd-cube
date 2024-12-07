

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext); 
  const location = useLocation();

  if (!user) {

    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  
  return children;
};

export default PrivateRoute;
