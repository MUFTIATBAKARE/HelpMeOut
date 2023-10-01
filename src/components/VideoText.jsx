import Button from "./Button";
import Image from "./Image";
import LargeText from "./LargeText";
import SmallText from "./SmallText";
import Edit from "../assets/edit.svg";

function VideoText() {
  return (
    <div>
      <LargeText className="video_main_text" text="Your video is ready!" />
      <span className="video_edit_container">
        <label>Name</label>
        <span className="video_edit_content">
          <SmallText
            className="video_body_text"
            text="Untitled_Video_20232509"
          />
          <Image className="video_image" src={Edit} />
        </span>
      </span>
      <span className="send_container">
        <input
          type="text"
          placeholder="enter email of receiver"
          className="signup_box send"
        />
        <Button text="Send" ext_btn="send_btn" />
      </span>
      <SmallText className="video_body_text" text="Video Url" />
      <span className="send_container">
        <input
          type="text"
          placeholder="https://www.helpmeout/Untitled_Video_20232509"
          className="signup_box send"
        />
        <Button text="Copy" ext_btn="send_btn copy" />
      </span>
      <SmallText className="video_body_text" text="Share your video " />
      <span className="share_video_btn">
        <Button text="Facebook" ext_btn="video_btn facebook2" />
        <Button text="WhatsApp" ext_btn="video_btn whatsapp" />
        <Button text="Telegram" ext_btn="video_btn telegram" />
      </span>
    </div>
  );
}

export default VideoText;
