import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { loginService, registerUserService } from "../services/authService";
import { useAuthUser } from "../context/AuthContext";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login: loginUser } = useAuthUser();
  const navigate = useNavigate();

  // Function to handle login
  const login = async credentials => {
    setIsLoading(true);
    toast.promise(loginService(credentials), {
      loading: "Logging in...",
      success: userData => {
        loginUser(userData.token, userData.user);
        setIsLoading(false);
        navigate("/blogs");
        return "User Login Successfully";
      },
      error: err => {
        setIsLoading(false);

        return err.message;
      },
    });
  };

  // Function to handle registration
  const register = async formData => {
    setIsLoading(true);

    toast.promise(registerUserService(formData), {
      loading: "Hang on...",
      success: () => {
        setIsLoading(false);
        return "User created Successfully";
      },
      error: err => {
        setIsLoading(false);
        return err.message;
      },
    });
  };

  return { isLoading, login, register };
};

export default useAuth;
