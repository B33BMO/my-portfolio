import Parser from "rss-parser";

const feeds = [
  "https://feeds.feedburner.com/TheHackersNews",
  "https://nvidianews.nvidia.com/releases.xml",
];

export async function GET() {
  const parser = new Parser();
  const allItems = [];

  for (const url of feeds) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const feed = await parser.parseString(text);
      allItems.push(...(feed.items || []));
    } catch (err) {
      console.error("Backend RSS fetch failed for:", url, err);
    }
  }

  return Response.json(allItems.slice(0, 15)); // Limit to 15 latest
}
