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

    const params = {
      [fieldToEdit]: fieldValue,
    };

    onUpdate(user, params);
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
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Sections */}
      {[
        { title: "Experiences", data: user.experiences },
        { title: "Educations", data: user.educations },
        { title: "Skills", data: user.skills },
        { title: "Projects", data: user.projects },
      ].map(
        (section) =>
          section.data.length > 0 && (
            <div key={section.title} className="card mb-3 shadow-sm">
              <div className="card-header">
                <h5 className="mb-0">{section.title}</h5>
              </div>
              <ul className="list-group list-group-flush">
                {section.data.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>{item}</div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleModalOpen(section.title.toLowerCase(), item)}
                    >
                      Edit
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
      )}

      {/* Other Information */}
      <div className="card mb-3 shadow-sm">
        <div className="card-header">
          <h5 className="mb-0">Contact Information</h5>
        </div>
        <ul className="list-group list-group-flush">
          {[
            { label: "Email", value: user.email, field: "email" },
            {
              label: "LinkedIn",
              value: user.linkedin_url,
              field: "linkedin_url",
              isLink: true,
            },
            {
              label: "Twitter",
              value: user.twitter_handle,
              field: "twitter_handle",
              isLink: true,
              prefix: "https://twitter.com/",
            },
            {
              label: "Website",
              value: user.website_url,
              field: "website_url",
              isLink: true,
            },
            {
              label: "Resume",
              value: user.online_resume_url,
              field: "online_resume_url",
              isLink: true,
            },
            {
              label: "GitHub",
              value: user.github_url,
              field: "github_url",
              isLink: true,
            },
          ].map(
            (info, index) =>
              info.value && (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{info.label}:</strong>{" "}
                    {info.isLink ? (
                      <a href={`${info.prefix || ""}${info.value}`} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </div>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleModalOpen(info.field, info.value)}
                  >
                    Edit
                  </button>
                </li>
              )
          )}
        </ul>
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
