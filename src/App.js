import React from "react";

// Component Imports
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import LandSection from "./components/sections/LandSection";
import VideoSection from "./components/sections/VideoSection";
import TeamSection from "./components/sections/TeamSection";
import Footer from "./components/sections/Footer";

// Data Imports
import {
  heroData,
  projectData,
  landData,
  teamData,
  footerData,
} from "./data/Data";

function App() {
  return (
    <main className="max-w-full min-h-screen bg-100 text-500 font-Sanchez">
      <HeroSection data={heroData} />
      <ProjectSection data={projectData} />
      <LandSection data={landData} />
      <VideoSection />
      <TeamSection data={teamData} />
      <Footer data={footerData} />
    </main>
  );
}

export default App;
