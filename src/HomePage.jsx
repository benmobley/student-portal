import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <div>Do you have an account?</div>
      <div>
        <Link to="/signup">Signup</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
