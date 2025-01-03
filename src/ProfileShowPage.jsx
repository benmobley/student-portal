import { ProfileShow } from "./ProfileShow";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

export function ProfileShowPage() {
  const user = useLoaderData();
  console.log(user);
  // const user = {
  //   first_name: "Ben",
  //   last_name: "Mobley",
  //   email: "ben@example.com",
  //   short_bio: "short bio",
  //   linkedin_url: "linkedin_url",
  //   twitter_handle: "twitter_handle",
  //   website_url: "website_url",
  //   online_resume_url: "online_resume_url",
  //   github_url: "github_url",
  //   photo: "example.jpg",
  //   experiences: ["first experience", "second experience"],
  //   educations: ["Purdue University", "Actualize Bootcamp"],
  //   skills: ["first skill", "second skill"],
  //   projects: ["First Project", "Second project", "Third Project"],
  // };
  const navigate = useNavigate();

  const handleUpdate = (profile, params) => {
    console.log("handleUpdate", profile);
    axios.patch(`/users/${user.id}.json`, params).then(() => {
      navigate(`/profile`);
    });
  };

  return (
    <main>
      <ProfileShow user={user} onUpdate={handleUpdate} />
    </main>
  );
}
