"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Parser from "rss-parser";

type FeedItem = {
  title: string;
  link: string;
  pubDate?: string;
};

const feeds = [
  "https://feeds.feedburner.com/TheHackersNews",
  "https://www.securityweek.com/feed",
  "https://nvd.nist.gov/feeds/xml/cve/misc/nvd-rss-analyzed.xml"
];

export default function News() {
  const [articles, setArticles] = useState<FeedItem[]>([]);

  useEffect(() => {
    const fetchRSS = async () => {
      const parser = new Parser();
      const allItems: FeedItem[] = [];

      for (const url of feeds) {
        try {
          const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
          const data = await response.json();
          const feed = await parser.parseString(data.contents);
          allItems.push(...(feed.items as FeedItem[]));
        } catch (err) {
          console.error("RSS fetch error:", url, err);
        }
      }

      setArticles(allItems.slice(0, 15)); // Trim to 15 latest
    };

    fetchRSS();
  }, []);

  return (
    <div className="flex justify-center px-4 pt-24 min-h-screen">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center text-white mb-8">News</h1>
        <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-6">

          {articles.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline text-lg">
                {item.title}
              </a>
              <p className="text-white/70 text-sm mt-1">{item.pubDate}</p>
            </motion.li>
          ))}
        </div>
      </div>
    </div>
  );
}
