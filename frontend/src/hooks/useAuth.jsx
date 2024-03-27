import { useState } from "react";
import { loginService } from "../services/authService"; // Import your service functions
import { useAuthUser } from "../context/AuthContext";
import toast from "react-hot-toast";
const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login: loginUser } = useAuthUser();

  // Function to handle login
  const login = async credentials => {
    setIsLoading(true);
    toast.promise(loginService(credentials), {
      loading: "Logging in...",
      success: userData => {
        loginUser(userData.token, userData.user);
        setIsLoading(false);

        return "User Login Successfully";
      },
      error: err => {
        setIsLoading(false);

        return err.message;
      },
    });
    // try {
    //   const userData = await loginService(credentials); // Call login service function
    //   loginUser(userData.token, userData.user);
    //   setUser(userData);
    //   toast.success("User Login Successfully");
    //   setIsLoading(false);
    // } catch (error) {
    //   toast.error(error.message);
    //   setError(error);
    //   setIsLoading(false);
    // }
  };

  // Function to handle registration
  //   const register = async formData => {
  //     setIsLoading(true);
  //     setError(null);
  //     try {
  //       const userData = await registerService(formData); // Call register service function
  //       setUser(userData);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setIsLoading(false);
  //     }
  //   };

  return { isLoading, login };
};

export default useAuth;
