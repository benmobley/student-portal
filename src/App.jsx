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
      <div className="d-flex flex-column min-vh-100">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow-1">
          <div className="container py-4">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfileShowPage />,
        loader: () => axios.get(`/current_user.json`).then((response) => response.data),
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
