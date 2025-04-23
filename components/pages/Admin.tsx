"use client";

import { useState } from "react";

export default function AdminPanel() {
  const [section, setSection] = useState("dashboard");

  const renderSection = () => {
    switch (section) {
      case "news":
        return <div className="text-white">📰 News Feed Controls (coming soon)</div>;
      case "projects":
        return <div className="text-white">📁 Project Manager (coming soon)</div>;
      case "dayz":
        return <div className="text-white">🎮 DayZ Manager (coming soon)</div>;
      case "minecraft":
        return <div className="text-white">⛏ Minecraft Controls (coming soon)</div>;
      default:
        return <div className="text-white">📊 Admin Dashboard (soon to be filled with juicy stats)</div>;
    }
  };

  return (
    <div className="min-h-screen p-8 text-white bg-black/90">
      <h1 className="text-4xl font-bold mb-6 text-center">🛠 Admin Control Panel</h1>

      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        <button onClick={() => setSection("dashboard")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded">Dashboard</button>
        <button onClick={() => setSection("news")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded">News Feeds</button>
        <button onClick={() => setSection("projects")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded">Projects</button>
        <button onClick={() => setSection("dayz")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded">DayZ</button>
        
      </nav>

      <div className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl">
        {renderSection()}
      </div>
    </div>
  );
}
