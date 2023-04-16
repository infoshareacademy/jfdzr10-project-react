import { useState } from "react";
import { AuthProviderProps } from "./AuthProvider.types";
import { AuthContext, AuthContextProps } from "../../context/auth/AuthContext";

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
