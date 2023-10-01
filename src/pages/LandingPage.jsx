import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="divider"></div>
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default LandingPage;
