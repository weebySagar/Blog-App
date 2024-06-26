import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const initialState = {
  token: localStorage.getItem("storyversetoken") || null,
  user: JSON.parse(localStorage.getItem("storyverseuser")) || null,
};

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(initialState);

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

  const updateUser = user => {
    setAuthData({ ...authData, user });
    localStorage.setItem("storyverseuser", JSON.stringify(user));
  };

  useEffect(() => {
    const token = localStorage.getItem("storyversetoken");
    const newUser = JSON.parse(localStorage.getItem("storyverseuser"));

    if (token && newUser) {
      setAuthData({ ...authData, token, user: newUser });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...authData, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthUser = () => {
  return useContext(AuthContext);
};
