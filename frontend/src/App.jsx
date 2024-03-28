import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "@components/Header/Header";
import SignupPage from "@pages/SignupPage";
import LoginPage from "@pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import BlogPage from "@pages/BlogPage";
import { Toaster } from "react-hot-toast";
import BlogDetailPage from "@pages/BlogDetailPage";
import MyBlogs from "@pages/MyBlogs";
import MyProfile from "@pages/MyProfile";

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
    {
      path: "/blogs/:blogId",
      element: <BlogDetailPage />,
    },
    {
      path: "/blogs/my-blogs",
      element: <MyBlogs />,
    },
    {
      path: "/myprofile",
      element: <MyProfile />,
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
