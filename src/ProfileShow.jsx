export function ProfileShow({ user }) {
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

              {user.short_bio && <p className="card-text">{user.short_bio}</p>}

              <ul className="list-group list-group-flush mt-3">
                {user.email && (
                  <li className="list-group-item">
                    <strong>Email:</strong> {user.email}
                  </li>
                )}
                {user.linkedin_url && (
                  <li className="list-group-item">
                    <strong>LinkedIn: </strong>
                    <a href={user.linkedin_url} target="_blank" rel="noopener noreferrer">
                      {user.linkedin_url}
                    </a>
                  </li>
                )}
                {user.twitter_handle && (
                  <li className="list-group-item">
                    <strong>Twitter: </strong>
                    <a href={`https://twitter.com/${user.twitter_handle}`} target="_blank" rel="noopener noreferrer">
                      @{user.twitter_handle}
                    </a>
                  </li>
                )}
                {user.website_url && (
                  <li className="list-group-item">
                    <strong>Website: </strong>
                    <a href={user.website_url} target="_blank" rel="noopener noreferrer">
                      {user.website_url}
                    </a>
                  </li>
                )}
                {user.online_resume_url && (
                  <li className="list-group-item">
                    <strong>Resume: </strong>
                    <a href={user.online_resume_url} target="_blank" rel="noopener noreferrer">
                      {user.online_resume_url}
                    </a>
                  </li>
                )}
                {user.github_url && (
                  <li className="list-group-item">
                    <strong>GitHub: </strong>
                    <a href={user.github_url} target="_blank" rel="noopener noreferrer">
                      {user.github_url}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
