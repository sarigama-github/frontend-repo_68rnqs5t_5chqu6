import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TournamentList from './components/TournamentList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <HeroSection />
      <TournamentList />
      <Footer />
    </div>
  );
}

export default App;
