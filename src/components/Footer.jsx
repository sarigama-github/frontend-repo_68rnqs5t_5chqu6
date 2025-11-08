import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div id="market" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-white/80">Marketplace preview</h4>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {['Battle Pass', 'Streamer Kit', '500 Coins', 'Pro Badge'].map((n) => (
                <div key={n} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="aspect-video rounded-md bg-gradient-to-br from-emerald-500/20 to-cyan-500/10" />
                  <p className="mt-2 text-xs text-white/80">{n}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Safety & Fairplay</a></li>
              <li><a href="#" className="hover:text-white">Terms & Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80">Newsletter</h4>
            <form className="mt-3 flex items-center gap-2">
              <input type="email" placeholder="you@example.com" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
              <button className="rounded-md bg-emerald-500 text-black text-sm font-semibold px-3 py-2 hover:brightness-110">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/60">© {new Date().getFullYear()} eSports India. All rights reserved.</div>
      </div>
    </footer>
  );
}
