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
    <div className="recording_container">
      {modal && (
        <div className="modal-container">
          <span className="modal save">
            <Image className="modal_image close" src={Close} />
            <span className="modal_content">
              <Image className="modal_imagee" src={Success} />
              <SmallText
                className="save_video_body_text2"
                text="Your video link has been sent to johnmark@gmail.com "
              />
              <div className="video_subcontent">
                <SmallText
                  className="save_video_text"
                  text="Would you need to view this video later? Save to your account now!"
                />
                <Button
                  text="Save Video"
                  ext_btn="save_video_btn2"
                  onClick={handleClick}
                />
                <span className="creat_account_container">
                  <SmallText
                    className="save_video_body_subtext"
                    text="Don’t have an account?"
                  />
                  <Link to="/signup">
                    <SmallText
                      className="save_video_body_subtext"
                      text="Create account"
                    />
                  </Link>
                </span>
              </div>
            </span>
          </span>
          <span className="overlay"></span>
        </div>
      )}
      <NavBar />
      <span className="video_container">
        <VideoText />
        <span>
          <p>Video goes here</p>
          <video></video>
        </span>
      </span>
      <div className="video_subcontent">
        <SmallText
          className="save_video_body_text"
          text="To ensure the availability and privacy of your video, we recommend saving it to your account. "
        />
        <Button
          text="Save Video"
          ext_btn="save_video_btn2"
          onClick={handleClick}
        />
        <span className="creat_account_container">
          <SmallText
            className="save_video_body_subtext"
            text="Don’t have an account?"
          />
          <Link to="/signup">
            <SmallText
              className="save_video_body_subtext"
              text="Create account"
            />
          </Link>
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default RecordingReady;
