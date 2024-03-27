import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
  });

  const login = (token, user) => {
    setAuthData({ token, user });
    localStorage.setItem("storyversetoken", token);
    localStorage.setItem("storyverseuser", JSON.stringify(user));
  };

  const logout = () => {
    setAuthData({ token: null, user: null });
    localStorage.removeItem("storyversetoken");
    localStorage.removeItem("storyverseuser");
  };

  return (
    <AuthContext.Provider value={{ ...authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthUser = () => {
  return useContext(AuthContext);
};
