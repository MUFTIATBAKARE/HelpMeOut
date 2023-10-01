import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import VideoText from "../components/VideoText";
import SmallText from "../components/SmallText";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Close from "../assets/close-circle.svg";
import Success from "../assets/success-kite.svg";
import Image from "../components/Image";

function RecordingReady() {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(true);
  };
  return (
    <div>
      {modal && (
        <div className="modal-container">
          <span className="modal save">
            <Image className="video_image" src={Close} />
            <span>
              <Image className="video_image" src={Success} />
              <SmallText
                className="save_video_body_text"
                text="To ensure the availability and privacy of your video, we recommend saving it to your account. "
              />
              <span>
                <SmallText
                  className="save_video_body_text"
                  text="To ensure the availability and privacy of your video, we recommend saving it to your account. "
                />
                <Button text="Save Video" ext_btn="save_video_btn2" />
                <SmallText
                  className="save_video_body_text"
                  text="Don’t have an account?"
                />
                <Link>
                  <SmallText
                    className="save_video_body_text"
                    text="Create account"
                  />
                </Link>
              </span>
            </span>
          </span>
          <span className="overlay"></span>
        </div>
      )}
      <NavBar />
      <span>
        <VideoText />
        <video></video>
      </span>
      <div>
        <SmallText
          className="save_video_body_text"
          text="To ensure the availability and privacy of your video, we recommend saving it to your account. "
        />
        <Button
          text="Save Video"
          ext_btn="save_video_btn2"
          onClick={handleClick}
        />
        <SmallText
          className="save_video_body_text"
          text="Don’t have an account?"
        />
        <Link>
          <SmallText className="save_video_body_text" text="Create account" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default RecordingReady;
