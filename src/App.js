import React from "react";

// Component Imports
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import FoxyCoinSection from "./components/sections/FoxyCoinSection";
import LandSection from "./components/sections/LandSection";
import VideoSection from "./components/sections/VideoSection";
import TeamSection from "./components/sections/TeamSection";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import NftSection from "./components/sections/NftSection";
import SouloFoxWalletSection from "./components/sections/SouloFoxWalletSection";
import GameFiSection from "./components/sections/GameFiSection";
import GameProgressSelection from "./components/sections/GameProgressSelection";
import RoadMapSection from "./components/sections/RoadMapSection";

// Data Imports
import {
  headerData,
  heroData,
  projectData,
  nftsData,
  foxyCoinData,
  soulofoxWalletData,
  gameFiData,
  landData,
  gameProgressData,
  teamData,
  footerData,
} from "./data/Data";

function App() {
  return (
    <main className="max-w-full min-h-screen bg-100 text-500 font-Sanchez">
      <Header data={headerData} />
      <HeroSection data={heroData} />
      <ProjectSection data={projectData} />
      <NftSection data={nftsData} />
      <FoxyCoinSection data={foxyCoinData} />
      <SouloFoxWalletSection data={soulofoxWalletData} />
      <GameFiSection data={gameFiData} />
      <LandSection data={landData} />
      <GameProgressSelection data={gameProgressData} />
      <VideoSection data={foxyCoinData} />
      <RoadMapSection />
      <TeamSection data={teamData} />
      <Footer data={footerData} />
    </main>
  );
}

export default App;
