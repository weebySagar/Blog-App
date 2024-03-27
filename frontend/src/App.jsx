import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "@components/Header/Header";
import SignupPage from "@pages/SignupPage";
import LoginPage from "@pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import BlogPage from "@pages/BlogPage";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/blogs",
      element: <BlogPage />,
    },
  ]);
  return (
    <>
      {/* <Header /> */}
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
