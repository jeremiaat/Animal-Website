import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import StatsSection from "../components/StatsSection";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import bgImage from "../assets/images/white-bengal-tiger-nature.jpg";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Navbar + HeroSection with unified background */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      {/* Other sections with normal dark background */}
      <Categories />
      <StatsSection />
      <Featured />
      <Footer />
    </div>
  );
}
