import axios from "axios";
import { Header } from "./Header";
import { PhotosPage } from "./PhotosPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <PhotosPage />
      <Footer />
    </div>
  );
}

export default App;
