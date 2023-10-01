import Button from "./Button";
import HeroWoman from "../assets/HeroWomanBlue.svg";
import HeroMan from "../assets/HeroManBoy.svg";
import HeroLady from "../assets/HeroLady.svg";
import Image from "./Image";

function HeroSection() {
  return (
    <div className="hero_container">
      <div className="hero_text">
        <h1>Show Them Don’t Just Tell</h1>
        <p>
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Button text="Install HelpMeOut" ext_btn="hero_btn" />
      </div>
      <div className="hero_image_container">
        <span className="hero_image_left_content">
          <Image className="hero_image" src={HeroWoman} />
          <Image className="hero_image" src={HeroMan} />
        </span>
        <div className="hero_image2">
          <Image src={HeroLady} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
