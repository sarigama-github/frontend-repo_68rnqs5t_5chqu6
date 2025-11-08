import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock } from 'lucide-react';

const tournaments = [
  { id: 1, title: 'BGMI Squad Scrims', time: 'Starts in 25m', slots: '64/100', tag: 'Featured', color: 'from-emerald-500 to-teal-500' },
  { id: 2, title: 'Valorant Aim Duel', time: 'Live Now', slots: '32/32', tag: 'Live', color: 'from-indigo-500 to-purple-500' },
  { id: 3, title: 'Free Fire Clash', time: 'Today 8 PM', slots: '96/100', tag: 'Hot', color: 'from-pink-500 to-rose-500' },
];

const TournamentCard = ({ item }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur shadow-sm"
  >
    <div className="flex items-center justify-between">
      <span className={`text-[10px] uppercase tracking-wider font-semibold bg-gradient-to-r ${item.color} text-white px-2 py-1 rounded`}>{item.tag}</span>
      <div className="flex items-center gap-1 text-white/80 text-sm"><Clock className="h-4 w-4" />{item.time}</div>
    </div>
    <div className="mt-3 flex items-start gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-white/5">
        <Trophy className="h-6 w-6 text-yellow-300" />
      </div>
      <div className="flex-1">
        <h3 className="text-white font-semibold text-base">{item.title}</h3>
        <p className="text-white/70 text-sm">Slots: {item.slots}</p>
      </div>
      <button className="rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white">Join</button>
    </div>
  </motion.div>
);

const TournamentList = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-white">Trending Tournaments</h2>
        <button className="text-sm text-emerald-400 hover:text-emerald-300">View all</button>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tournaments.map((t) => (
          <TournamentCard key={t.id} item={t} />
        ))}
      </div>
    </section>
  );
};

export default TournamentList;
