"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type FeedItem = {
  title: string;
  link: string;
  pubDate?: string;
};

export default function News() {
  const [articles, setArticles] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/rss");
        const data = await res.json();
        setArticles(data.slice(0, 15)); // optional: keep just the latest 15
      } catch (err) {
        console.error("Frontend failed to load RSS data:", err);
      } finally {
        setLoading(false);
      }
    };
 
    fetchArticles();
  }, []);

  return (
    <div className="flex justify-center px-4 pt-24 min-h-screen">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center text-white mb-8">News</h1>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-400" />
          </div>
        ) : (
          <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-6">
            {articles.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 list-none"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline text-lg"
                >
                  {item.title}
                </a>
                <p className="text-white/70 text-sm mt-1">{item.pubDate}</p>
              </motion.li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
