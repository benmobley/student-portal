import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        event.target.reset();
        window.location.href = "/"; // Redirect or handle login success
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Login</h1>

              {/* Error Messages */}
              {errors.length > 0 && (
                <div className="alert alert-danger" role="alert">
                  {errors.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-secondary w-100">
                  Login
                </button>
              </form>

              {/* Signup Link */}
              <div className="text-center mt-4">
                <p>
                  No account? <Link to="/signup">Signup</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
