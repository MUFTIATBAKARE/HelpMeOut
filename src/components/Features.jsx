import Image from "./Image";
import Record from "../assets/Record.svg";
import Share from "../assets/Share.svg";
import Revisit from "../assets/Revisit.svg";
import VideoRepository from "../assets/VideoRepository.svg";
import LargeText from "./LargeText";
import SmallText from "./SmallText";

function Features() {
  return (
    <div className="features_container" id="features">
      <span className="features_head">
        <LargeText className="features_head_text" text="Features" />
        <SmallText
          className="features_body_text"
          text="Key Highlights of Our Extension"
        />
      </span>
      <div className="features_body">
        <span className="features_body_content">
          <span className="features_body_sub_content">
            <span>
              <Image className="features_image" src={Record} />
            </span>
            <span>
              <LargeText
                className="features_subhead_text"
                text="Simple Screen Recording"
              />
              <SmallText
                className="features_body_text"
                text="Effortless screen recording for everyone. Record with ease, no tech expertise required."
              />
            </span>
          </span>
          <span className="features_body_sub_content">
            <span>
              <Image className="features_image" src={Share} />
            </span>
            <span>
              <LargeText
                className="features_subhead_text"
                text="Easy-to-Share URL"
              />
              <SmallText
                className="features_body_text"
                text="Share your recordings instantly with a single link. No attachments, no downloads."
              />
            </span>
          </span>
          <span className="features_body_sub_content">
            <span>
              <Image className="features_image" src={Revisit} />
            </span>
            <span>
              <LargeText
                className="features_subhead_text"
                text="Revisit Recordings"
              />
              <SmallText
                className="features_body_text"
                text="Access and review your past content effortlessly. Your recordings, always at your fingertips."
              />
            </span>
          </span>
        </span>
        <Image className="features_right_image" src={VideoRepository} />
      </div>
    </div>
  );
}

export default Features;
