import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <a href="/#">Home</a>
        <div>
          <Link to="/portalpage">Profile</Link>
        </div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <a>
          <LogoutLink />
        </a>
      </nav>
    </header>
  );
}
