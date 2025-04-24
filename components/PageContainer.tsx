"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import News from "./pages/News";
import DayZ from "./pages/DayZ";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import MinecraftPanel from "./pages/MinecraftPanel";
import Tools from "./pages/Tools";
import BackgroundVideo from "./BackgroundVideo";

export type Page =
  | "home"
  | "projects"
  | "news"
  | "dayz"
  | "admin"
  | "minecraft"
  | "misc"
  | "tools"
  | "yt-downloader"
  | "ip-trace";

export default function PageContainer() {
  const [page, setPage] = useState<Page>("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderPage = () => {
    if (page === "admin") {
      return isLoggedIn
        ? <AdminPanel onSelect={(subpage: Page) => setPage(subpage)} />
        : <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
    }

    if (page === "minecraft") return <MinecraftPanel />;
    if (page === "misc") return <div className="text-white p-8">🧪 Misc Panel Placeholder</div>;
    if (page === "tools") return <Tools onSelect={(subpage: Page) => setPage(subpage)} />;

    switch (page) {
      case "projects": return <Projects />;
      case "news": return <News />;
      case "dayz": return <DayZ />;
      default: return <Home />;
    }
  };

  return (
    <>
      <BackgroundVideo page={page} />

      <nav className="flex justify-between items-center p-6 border-b border-white/10">
        <div className="space-x-6">
          {["home", "projects", "news", "dayz", "tools"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p as Page)}
              className="capitalize text-white/80 hover:text-cyan-400 transition"
            >
              {p}
            </button>
          ))}
        </div>

        <div>
          <button
            onClick={() => setPage("admin")}
            className="text-white/80 hover:text-red-400 font-bold uppercase tracking-wider transition"
          >
            Admin
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={page + (isLoggedIn ? "-auth" : "-guest")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
