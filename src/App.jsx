import axios from "axios";
import { Header } from "./Header";
import { ProfileShowPage } from "./ProfileShowPage";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div className="container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/users/:id",
        element: <ProfileShowPage />,
        loader: ({ params }) => axios.get(`/users/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
