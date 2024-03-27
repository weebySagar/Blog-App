import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "@components/Header/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    // {
    //   path: "/register",
    //   element: <SignupPage />,
    // },
    // {
    //   path: "/login",
    //   element: <LoginPage />,
    // },
    // {
    //   path: "/chat",
    //   element: <AuthPage Component={ChatPage} />,
    // },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
