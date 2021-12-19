import React from "react";

// Component Imports
import HeroSection from "./components/sections/HeroSection";
import Footer from "./components/sections/Footer";

// Data Imports
import footerData from "./data/footerData";

function App() {
  return (
    <main className="max-w-full min-h-screen bg-100 text-500 font-Sanchez">
      <HeroSection />
      <Footer data={footerData} />
    </main>
  );
}

export default App;
