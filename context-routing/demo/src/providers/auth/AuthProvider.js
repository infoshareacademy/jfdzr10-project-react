import {  useState } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';

export const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const toggleIsAuth = () => {
    setIsAuth((prev) => !prev);
  };

  const value = {
    isAuth,
    toggleIsAuth,
  };
  

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};
