import { ProfileShow } from "./ProfileShow";
import { ProfileEdit } from "./ProfileEdit";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

export function ProfileShowPage() {
  const user = useLoaderData();
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
  //   experiences: [],
  //   educations: [],
  //   skills: [],
  //   projects: [],
  // };
  const navigate = useNavigate();

  const handleUpdate = (profile, params) => {
    console.log("handleUpdate", profile);
    axios.patch(`/users/${user.id}.json`, params).then(() => {
      navigate(`/users/${user.id}`);
    });
  };

  return (
    <main>
      <ProfileShow user={user} />
      <ProfileEdit onUpdate={handleUpdate} />
    </main>
  );
}
