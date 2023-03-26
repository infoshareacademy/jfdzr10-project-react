import { useState } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { AuthContextProps } from '../../context/auth/AuthContext.types';
import { AuthProviderProps } from './AuthProvider.types';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);

  const toggleIsAuth = () => {
    setIsAuth((prev) => !prev);
  };

  const value: AuthContextProps = {
    isAuth,
    toggleIsAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
