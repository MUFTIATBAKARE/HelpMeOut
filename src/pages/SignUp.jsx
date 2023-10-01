import ColoredLogo from "../assets/ColoredLogo.svg";
import Button from "../components/Button";
import Image from "../components/Image";
import LargeText from "../components/LargeText";
import SmallText from "../components/SmallText";

function SignUp() {
  return (
    <div className="signup_container">
      <Image className="logo" src={ColoredLogo} />
      <span className="signup_content">
        <span>
          <LargeText className="signup_main_text" text="Log in or Sign up" />
          <SmallText
            className="signup_body_text"
            text="Join millions of others in sharing successful moves on HelpMeOut."
          />
        </span>
        <input
          className="signup_box google"
          type="submit"
          value="Continue with Google"
        />
        <input
          className="signup_box facebook"
          type="submit"
          value="Continue with Facebook"
        />
        <div className="divider">or</div>
        <div className="form_field">
          <label>Email</label>
          <input
            className="signup_box white"
            type="text"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form_field">
          <label>Password</label>
          <input
            className="signup_box white"
            type="text"
            placeholder="Enter your Password"
          />
        </div>
        <Button text="Sign Up" ext_btn="signup_box blue" />
      </span>
    </div>
  );
}

export default SignUp;
