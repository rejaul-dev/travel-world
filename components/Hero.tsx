"use client";

import About from "./About";
import CallToAction from "./CallToAction";
import Destinations from "./Destinations";
import HeroSlider from "./HeroSlider";
import Services from "./Services";
import Team from "./Team";
import Testimonials from "./Testimonials";
import TravelTips from "./TravelTips";
import WhatsAppIcon from "./WhatsAppIcon";

const Hero = () => {
  return (
    <div className="md:mt-16" id="hero">
      <HeroSlider />
      <div className="wrapper">
        <Services />
        <Destinations />
        <About />
        <Team />
        <TravelTips />
        <Testimonials />
        <CallToAction />
      </div>
      <WhatsAppIcon />
    </div>
  );
};

export default Hero;
