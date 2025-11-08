import React from 'react';
import { Users, Clock, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const tournaments = [
  {
    id: 1,
    title: 'BGMI Daily Scrims',
    game: 'BGMI',
    slots: '48/64',
    time: 'Starts in 2h',
    prize: '₹5,000',
  },
  {
    id: 2,
    title: 'Valorant Diamond Cup',
    game: 'Valorant',
    slots: '32/32',
    time: 'Live now',
    prize: '₹10,000',
  },
  {
    id: 3,
    title: 'CoD Mobile Rush',
    game: 'CoD Mobile',
    slots: '12/16',
    time: 'Tomorrow 7 PM',
    prize: '₹3,000',
  },
];

export default function TournamentList() {
  return (
    <section id="tournaments" className="relative w-full bg-[#07090A] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Trending tournaments</h2>
            <p className="text-white/70 mt-1 text-sm">Join matches hosted by trusted organizers across India.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-emerald-400 hover:text-emerald-300 font-medium">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((t, idx) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:border-white/20 transition"
            >
              <header className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 text-emerald-300 text-xs px-2.5 py-1 font-medium">{t.game}</span>
                <span className="inline-flex items-center gap-1 text-xs text-white/70"><Trophy className="w-4 h-4 text-amber-300" /> {t.prize}</span>
              </header>
              <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/70">
                <div className="inline-flex items-center gap-1.5"><Users className="w-4 h-4" /> {t.slots}</div>
                <div className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> {t.time}</div>
                <div className="text-right">
                  <button className="inline-flex items-center justify-center rounded-md bg-emerald-500 text-black font-semibold px-3 py-1.5 text-xs hover:brightness-110">Join</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
