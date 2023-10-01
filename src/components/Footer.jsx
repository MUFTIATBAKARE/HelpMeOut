import Image from "./Image";
import WhiteLogo from "../assets/WhiteLogo.svg";
import LargeText from "./LargeText";
import SmallText from "./SmallText";

function Footer() {
  return (
    <div className="footer_container">
      <span>
        <Image className="footer_image" src={WhiteLogo} />
      </span>
      <span className="footer_body_content">
        <LargeText className="footer_head" text="Menu" />
        <span className="footer_subbody_content">
          <SmallText className="footer_text" text="Home" />
          <SmallText className="footer_text" text="Converter" />
          <SmallText className="footer_text" text="How it Works" />
        </span>
      </span>
      <span className="footer_body_content">
        <LargeText className="footer_head" text="About us" />
        <span className="footer_subbody_content">
          <SmallText className="footer_text" text="About" />
          <SmallText className="footer_text" text="Contact Us" />
          <SmallText className="footer_text" text="Privacy Policy" />
        </span>
      </span>
      <span className="footer_body_content">
        <LargeText className="footer_head" text="Screen Record" />
        <span className="footer_subbody_content">
          <SmallText className="footer_text" text="Browser Window" />
          <SmallText className="footer_text" text="Desktop" />
          <SmallText className="footer_text" text="Application" />
        </span>
      </span>
    </div>
  );
}

export default Footer;
