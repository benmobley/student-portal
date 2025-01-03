import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("email"); // Check if user is logged in
    setIsLoggedIn(!!user);
  }, []);

  return (
    <div className="app-container">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            {/* Brand / Home Link */}
            <Link to="/" className="navbar-brand">
              MyAwesomeApp
            </Link>

            {/* Navbar Toggler (for small screens) */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Show Profile Link only if the user is logged in */}
                {isLoggedIn && (
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                  </li>
                )}
                {/* Show Login and Signup only if the user is not logged in */}
                {!isLoggedIn && (
                  <>
                    <li className="nav-item">
                      <Link to="/signup" className="nav-link">
                        Signup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              {/* Show Logout Link only if the user is logged in */}
              {isLoggedIn && (
                <div className="d-flex">
                  <LogoutLink />
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
