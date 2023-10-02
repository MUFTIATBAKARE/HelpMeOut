import { Link } from "react-router-dom";
import Image from "../components/Image";
import ColoredLogo from "../assets/ColoredLogo.svg";
import Profile from "../assets/profile-circle.svg";
import Arrow from "../assets/arrow-down.svg";
import SmallText from "./SmallText";

function RepositoryHeader() {
  return (
    <div className="repository_header">
      <Link to="/home">
        <Image className="logo" src={ColoredLogo} />
      </Link>
      <span className="profile_container">
        <Image className="profile" src={Profile} />
        <SmallText className="repository_header_text" text="John Mark" />
        <Image className="arrow" src={Arrow} />
      </span>
    </div>
  );
}

export default RepositoryHeader;
