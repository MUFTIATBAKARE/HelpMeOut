import Button from "./Button";
import Image from "./Image";
import LargeText from "./LargeText";
import SmallText from "./SmallText";
import Edit from "../assets/edit.svg";

function VideoText() {
  return (
    <div>
      <LargeText className="video_main_text" text="Your video is ready!" />
      <label>Name</label>
      <SmallText className="video_body_text" text="Untitled_Video_20232509" />
      <Image className="video_image" src={Edit} />
      <input type="text" placeholder="enter email of receiver" />
      <Button text="Send" ext_btn="video_btn" />
      <SmallText className="video_body_text" text="Video Url" />
      <input
        type="text"
        placeholder="https://www.helpmeout/Untitled_Video_20232509"
      />
      <Button text="Copy" ext_btn="video_btn2" />
      <SmallText className="video_body_text" text="Share your video " />
      <Button text="Facebook" ext_btn="video_btn2" />
      <Button text="WhatsApp" ext_btn="video_btn2" />
      <Button text="Telegram" ext_btn="video_btn2" />
    </div>
  );
}

export default VideoText;
