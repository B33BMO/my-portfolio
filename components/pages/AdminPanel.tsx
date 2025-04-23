"use client";

import { motion } from "framer-motion";

export default function AdminPanel({ onSelect }: { onSelect?: (page: string) => void }) {
  const panels = [
    { key: "minecraft", title: "Minecraft Server", description: "Manage the Minecraft world and its players." },
    { key: "misc", title: "Misc Tools", description: "Random power tools and secrets." },
  ];

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-10">Admin Control Panel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {panels.map((panel, i) => (
          <motion.div
            key={panel.key}
            onClick={() => onSelect?.(panel.key)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="cursor-pointer p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-cyan-700/20 transition-all duration-300 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{panel.title}</h2>
            <p className="text-white/70 text-sm">{panel.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
