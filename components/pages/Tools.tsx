"use client";

import PageWrapper from "../PageWrapper";
import { motion } from "framer-motion";

export default function Tools({ onSelect }: { onSelect: (page: string) => void }) {
  const tools = [
    { key: "yt-downloader", title: "YouTube Downloader", description: "Download videos from YouTube with ease." },
    { key: "ip-trace", title: "IP Trace", description: "Trace IP addresses and get geolocation data." },
  ];

  return (
    <PageWrapper>
      <div className="p-8 min-h-screen text-white">
        <h1 className="text-4xl font-bold text-center mb-10">Tools</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.key}
              onClick={() => onSelect(tool.key)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="cursor-pointer p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-cyan-700/20 transition-all duration-300 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-2">{tool.title}</h2>
              <p className="text-white/70 text-sm">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
