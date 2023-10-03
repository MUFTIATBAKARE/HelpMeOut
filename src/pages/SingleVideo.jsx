import Button from "../components/Button";
import Image from "../components/Image";
import RepositoryHeader from "../components/RepositoryHeader";
import SmallText from "../components/SmallText";
import Edit from "../assets/edit.svg";

function SingleVideo() {
  return (
    <div className="repository_container">
      <RepositoryHeader />
      <span>
        <SmallText
          className="repository_body_text"
          text="Home/Recent videos/video1"
        />{" "}
        <span className="video_edit_container">
          <span className="video_edit_content">
            <SmallText
              className="video_body_text"
              text="Untitled_Video_20232509"
            />
            <Image className="video_image" src={Edit} />
          </span>
        </span>
        <span>
          <p>video goes here</p>
          <video></video>
        </span>
        <span className="single_send_container">
          <span className="send_container">
            <input
              type="text"
              placeholder="enter email of receiver"
              className="signup_box send"
            />
            <Button text="Send" ext_btn="send_btn" />
          </span>
          <span className="copy_container">
            <input
              type="text"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
              className="signup_box send"
            />
            <Button text="Copy" ext_btn="send_btn2 copy" />
          </span>
        </span>
        <SmallText className="video_body_text" text="Share your video " />
        <span className="share_video_btn">
          <Button text="Facebook" ext_btn="video_btn facebook2" />
          <Button text="WhatsApp" ext_btn="video_btn whatsapp" />
          <Button text="Telegram" ext_btn="video_btn telegram" />
        </span>
        <SmallText className="video_body_text" text=" Transcripts" />
      </span>
    </div>
  );
}

export default SingleVideo;
