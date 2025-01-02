import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4">Welcome to Our Awesome App</h1>
          <p className="lead mb-5">The perfect place to connect, share, and grow with a thriving community.</p>
          {/* Action Buttons */}
          <div className="d-flex justify-content-center gap-3">
            <Link to="/signup" className="btn btn-primary btn-lg px-4">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-outline-primary btn-lg px-4">
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* Optional Features Section */}
      <div className="row mt-5 justify-content-center">
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title mb-3">Engage</h5>
              <p className="card-text">Connect with like-minded individuals and share your experiences.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title mb-3">Learn</h5>
              <p className="card-text">Explore our resources and learn new skills to level up your journey.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h5 className="card-title mb-3">Grow</h5>
              <p className="card-text">Collaborate on projects, seek mentorship, and achieve your goals together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
