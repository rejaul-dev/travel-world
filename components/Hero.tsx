import AboutSection from "./About";
import CallToAction from "./CallToAction";
import HeroSlider from "./HeroSlider";
import Services from "./Services";
import TestimonialsSection from "./Testimonials";
import TravelTips from "./TravelTips";

const Hero = () => {
  return (
    <div className="md:mt-16">
      <HeroSlider />
      <div className="wrapper">
        <Services />
        <AboutSection />
        <TravelTips />
        <TestimonialsSection />
        <div className="py-20">
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default Hero;
