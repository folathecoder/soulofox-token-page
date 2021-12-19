import React from "react";

// Component Imports
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import Footer from "./components/sections/Footer";

// Data Imports
import { heroData, projectData, footerData } from "./data/Data";

function App() {
  return (
    <main className="max-w-full min-h-screen bg-100 text-500 font-Sanchez">
      <HeroSection data={heroData} />
      <ProjectSection data={projectData} />
      <Footer data={footerData} />
    </main>
  );
}

export default App;
