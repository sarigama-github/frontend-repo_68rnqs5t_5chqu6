import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TournamentList from './components/TournamentList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <TournamentList />
      <section id="marketplace" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-lg sm:text-xl font-bold">Featured Marketplace</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
              <div className="mt-3">
                <h3 className="text-sm font-semibold">Pro Bundle #{i}</h3>
                <p className="text-xs text-white/70">Skins • Avatars • Boosters</p>
                <button className="mt-2 w-full rounded-md bg-white/10 py-2 text-sm">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
