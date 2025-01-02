import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
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
              {/* Profile Link */}
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              {/* Signup Link */}
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Signup
                </Link>
              </li>
              {/* Login Link */}
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
            {/* Logout Button/Link (right-aligned) */}
            <div className="d-flex">
              <LogoutLink />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
