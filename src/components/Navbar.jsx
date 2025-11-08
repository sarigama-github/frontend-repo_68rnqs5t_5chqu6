import React from 'react';
import { Rocket, ShoppingBag, User, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-semibold">
          <Rocket className="h-5 w-5 text-emerald-400" /> GK Arena
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white" href="#tournaments">Tournaments</a>
          <a className="hover:text-white" href="#marketplace">Marketplace</a>
          <a className="hover:text-white" href="#leaderboard">Leaderboards</a>
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="notifications" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white"><Bell className="h-5 w-5" /></button>
          <button aria-label="cart" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white"><ShoppingBag className="h-5 w-5" /></button>
          <button className="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-white"><User className="h-4 w-4 inline mr-1"/>Sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
