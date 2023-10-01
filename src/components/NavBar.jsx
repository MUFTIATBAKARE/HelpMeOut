import { Link } from "react-router-dom";
import ColoredLogo from "../assets/ColoredLogo.svg";
import Button from "./Button";
import Image from "./Image";
function NavBar() {
  return (
    <div className="nav_bar_container">
      <Image className="logo" src={ColoredLogo} />
      <div className="nav_bar_text">
        <a href="#features" className="nav_link">
          <h3>Features</h3>
        </a>
        <a href="#how" className="nav_link">
          <h3>How it works</h3>
        </a>
      </div>
      <Link to="/signup">
        <Button text="Get Started" ext_btn="nav_bar_btn" />
      </Link>
    </div>
  );
}

export default NavBar;
