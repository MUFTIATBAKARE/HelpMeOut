import Image from "./Image";
import One from "../assets/One.svg";
import Two from "../assets/Two.svg";
import Three from "../assets/Three.svg";
import ScreenRecord from "../assets/ScreenRecord.svg";

import LargeText from "./LargeText";
import SmallText from "./SmallText";

function HowItWorks() {
  return (
    <div className="how_container" id="how">
      <LargeText className="How_head_text" text="How it works" />
      <div className="how_content">
        <span className="how_body_content">
          <Image className="how_top_image" src={One} />
          <LargeText className="how_subhead_text" text="Record Screen" />
          <SmallText
            className="how_body_text"
            text="Click the 'Start Recording' button in our extension.  choose which part of your screen to capture and who you want to send it to."
          />
          <Image className="how_bottom_image" src={ScreenRecord} />
        </span>
        <span className="how_body_content">
          <Image className="how_top_image" src={Two} />
          <LargeText className="how_subhead_text" text="Share Your Recording" />
          <SmallText
            className="how_body_text"
            text="We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform."
          />
          <Image className="how_bottom_image" src={ScreenRecord} />
        </span>
        <span className="how_body_content">
          <Image className="how_top_image" src={Three} />
          <LargeText className="how_subhead_text" text="Learn Effortlessly" />
          <SmallText
            className="how_body_text"
            text="Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone."
          />
          <Image className="how_bottom_image" src={ScreenRecord} />
        </span>
      </div>
    </div>
  );
}

export default HowItWorks;
