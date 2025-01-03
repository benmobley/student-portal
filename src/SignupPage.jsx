import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Redirect to the home page or another appropriate page
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Signup</h1>

              {errors.length > 0 && (
                <div className="alert alert-danger" role="alert">
                  {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="first_name" className="form-label">
                      First Name
                    </label>
                    <input id="first_name" name="first_name" type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="last_name" className="form-label">
                      Last Name
                    </label>
                    <input id="last_name" name="last_name" type="text" className="form-control" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input id="email" name="email" type="email" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="short_bio" className="form-label">
                    Short Bio
                  </label>
                  <input id="short_bio" name="short_bio" type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="linkedin" className="form-label">
                    LinkedIn URL
                  </label>
                  <input id="linkedin" name="linkedin_url" type="url" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="twitter" className="form-label">
                    Twitter Handle
                  </label>
                  <input id="twitter" name="twitter_handle" type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="website" className="form-label">
                    Website URL
                  </label>
                  <input id="website" name="website_url" type="url" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="resume" className="form-label">
                    Online Resume URL
                  </label>
                  <input id="resume" name="online_resume_url" type="url" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="github" className="form-label">
                    GitHub URL
                  </label>
                  <input id="github" name="github_url" type="url" className="form-control" />
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

                <div className="mb-3">
                  <label htmlFor="password_confirmation" className="form-label">
                    Password Confirmation
                  </label>
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    className="form-control"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
