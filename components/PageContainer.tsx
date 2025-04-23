"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import News from "./pages/News";
import DayZ from "./pages/DayZ";
import AdminLogin from "./pages/AdminLogin"; // 💥 make sure this path matches
import BackgroundVideo from "./BackgroundVideo";

export default function PageContainer() {
  const [page, setPage] = useState<"home" | "projects" | "news" | "dayz" | "admin">("home");

  const renderPage = () => {
    switch (page) {
      case "projects": return <Projects />;
      case "news": return <News />;
      case "dayz": return <DayZ />;
      case "admin": return <AdminLogin onLogin={() => setPage("home")} />;
      default: return <Home />;
    }
  };

  return (
    <>
      <BackgroundVideo page={page} />

      <nav className="flex justify-between items-center p-6 border-b border-white/10">
        <div className="space-x-6">
          {["home", "projects", "news", "dayz"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p as any)}
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
          key={page}
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
