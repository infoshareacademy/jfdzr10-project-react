import { createContext } from "react";

export type AuthContextProps = {
  isAuth: boolean;
  toggleIsAuth: () => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)
