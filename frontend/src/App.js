import React, { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Manifesto from "@/components/site/Manifesto";
import ThreeLabs from "@/components/site/ThreeLabs";
import DevelopmentProcess from "@/components/site/DevelopmentProcess";
import WhyPlayerLab from "@/components/site/WhyPlayerLab";
import TrainingExperience from "@/components/site/TrainingExperience";
import Coaches from "@/components/site/Coaches";
import Location from "@/components/site/Location";
import FAQ from "@/components/site/FAQ";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import RegistrationDialog from "@/components/site/RegistrationDialog";

function HomePage() {
  const [open, setOpen] = useState(false);
  const onJoinClick = () => setOpen(true);

  return (
    <div className="App min-h-screen bg-ink-900 text-white" data-testid="home-page">
      <Navbar onJoinClick={onJoinClick} />
      <main>
        <Hero onJoinClick={onJoinClick} />
        <Manifesto />
        <ThreeLabs />
        <DevelopmentProcess />
        <WhyPlayerLab />
        <TrainingExperience />
        <Coaches />
        <Location />
        <FAQ />
        <FinalCTA onJoinClick={onJoinClick} />
      </main>
      <Footer />
      <RegistrationDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
