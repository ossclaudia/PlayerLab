import React, { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ThreeLabs from "@/components/site/ThreeLabs";
import Location from "@/components/site/Location";
import Contact from "@/components/site/Contact";
import RegistrationDialog from "@/components/site/RegistrationDialog";

function HomePage() {
  const [open, setOpen] = useState(false);
  const onJoinClick = () => setOpen(true);

  return (
    <div className="App min-h-screen bg-cream-100 text-navy" data-testid="home-page">
      <Navbar onJoinClick={onJoinClick} />
      <main>
        <Hero onJoinClick={onJoinClick} />
        <ThreeLabs />
        <Location />
        <Contact onJoinClick={onJoinClick} />
      </main>
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
