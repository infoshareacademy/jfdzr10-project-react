import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  

  if (typeof context === 'undefined') {
    throw new Error('AuthContext hook is not wrapped by AuthContext provider');
  }

  return context;
};
