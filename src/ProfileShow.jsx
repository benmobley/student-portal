import { useState } from "react";

export function ProfileShow({ user, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState("");
  const [fieldValue, setFieldValue] = useState("");

  // Open modal for specific field
  const handleModalOpen = (fieldName, initialValue) => {
    setFieldToEdit(fieldName);
    setFieldValue(initialValue || "");
    setShowModal(true);
  };

  // Close modal
  const handleModalClose = () => {
    setShowModal(false);
    setFieldToEdit("");
    setFieldValue("");
  };

  // Submit updated field
  const handleModalSubmit = (event) => {
    event.preventDefault();

    // Only update the single field that’s changed
    const params = {
      [fieldToEdit]: fieldValue,
    };

    onUpdate(user, params); // Call parent's update function
    handleModalClose();
  };

  return (
    <main className="container mt-4">
      <div className="card mb-3 shadow-sm">
        <div className="row g-0">
          {/* Profile Image */}
          <div className="col-md-4">
            <img src={user.photo} className="img-fluid rounded-start" alt={`${user.first_name} ${user.last_name}`} />
          </div>

          {/* Profile Info */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title mb-3">
                {user.first_name} {user.last_name}
              </h5>
              {/* Edit Buttons for Names */}
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => handleModalOpen("first_name", user.first_name)}
              >
                Edit First Name
              </button>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => handleModalOpen("last_name", user.last_name)}
              >
                Edit Last Name
              </button>

              {/* Short Bio */}
              {user.short_bio && (
                <p className="card-text mt-3">
                  <strong>Short Bio:</strong> {user.short_bio}{" "}
                  <button
                    className="btn btn-sm btn-outline-primary ms-2"
                    onClick={() => handleModalOpen("short_bio", user.short_bio)}
                  >
                    Edit
                  </button>
                </p>
              )}

              <ul className="list-group list-group-flush mt-3">
                {/* Email */}
                {user.email && (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Email:</strong> {user.email}
                    </div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleModalOpen("email", user.email)}
                    >
                      Edit
                    </button>
                  </li>
                )}

                {/* LinkedIn */}
                {user.linkedin_url && (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>LinkedIn: </strong>
                      <a href={user.linkedin_url} target="_blank" rel="noopener noreferrer">
                        {user.linkedin_url}
                      </a>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleModalOpen("linkedin_url", user.linkedin_url)}
                    >
                      Edit
                    </button>
                  </li>
                )}

                {/* Twitter */}
                {user.twitter_handle && (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Twitter: </strong>
                      <a href={`https://twitter.com/${user.twitter_handle}`} target="_blank" rel="noopener noreferrer">
                        @{user.twitter_handle}
                      </a>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleModalOpen("twitter_handle", user.twitter_handle)}
                    >
                      Edit
                    </button>
                  </li>
                )}

                {/* Website */}
                {user.website_url && (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Website: </strong>
                      <a href={user.website_url} target="_blank" rel="noopener noreferrer">
                        {user.website_url}
                      </a>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleModalOpen("website_url", user.website_url)}
                    >
                      Edit
                    </button>
                  </li>
                )}

                {/* Resume */}
                {user.online_resume_url && (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Resume: </strong>
                      <a href={user.online_resume_url} target="_blank" rel="noopener noreferrer">
                        {user.online_resume_url}
                      </a>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleModalOpen("online_resume_url", user.online_resume_url)}
                    >
                      Edit
                    </button>
                  </li>
                )}

                {/* GitHub */}
                {user.github_url && (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>GitHub: </strong>
                      <a href={user.github_url} target="_blank" rel="noopener noreferrer">
                        {user.github_url}
                      </a>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleModalOpen("github_url", user.github_url)}
                    >
                      Edit
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ==================
          Edit Field Modal
       ================== */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <form onSubmit={handleModalSubmit}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit {fieldToEdit}</h5>
                  <button type="button" className="btn-close" onClick={handleModalClose}></button>
                </div>
                <div className="modal-body">
                  {fieldToEdit === "short_bio" ? (
                    <textarea
                      className="form-control"
                      rows={4}
                      value={fieldValue}
                      onChange={(e) => setFieldValue(e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      value={fieldValue}
                      onChange={(e) => setFieldValue(e.target.value)}
                    />
                  )}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
