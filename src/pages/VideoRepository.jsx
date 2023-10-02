import { Link } from "react-router-dom";
import LargeText from "../components/LargeText";
import RepositoryHeader from "../components/RepositoryHeader";
import SmallText from "../components/SmallText";

function VideoRepository() {
  return (
    <div className="repository_container">
      <RepositoryHeader />
      <span className="repository_content_text">
        <span>
          <LargeText
            className="repository_header_text"
            text="Hello, John Mark"
          />
          <SmallText
            className="repository_body_text"
            text="Here are your recorded videos"
          />
        </span>
        <span>
          <input
            type="search"
            placeholder="search for a particular video"
            className="signup_box repository_search"
          />
        </span>
      </span>
      <span>
        <p>Recent files</p>
        <Link to="/video">
          <span>
            <p>video 1</p>
            <vide></vide>
          </span>
        </Link>
      </span>
    </div>
  );
}

export default VideoRepository;
