import React from 'react';
import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold tracking-tight">
          <span className="inline-flex items-center justify-center rounded-md bg-emerald-500/20 p-1.5">
            <Rocket className="w-5 h-5 text-emerald-400" />
          </span>
          <span className="text-sm sm:text-base">eSports India</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="#tournaments" className="hidden sm:inline-flex text-sm text-white/80 hover:text-white transition">Tournaments</a>
          <a href="#market" className="hidden sm:inline-flex text-sm text-white/80 hover:text-white transition">Market</a>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/15 rounded-md px-3 py-1.5 transition">
            <User className="w-4 h-4" />
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
