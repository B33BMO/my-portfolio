"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/B33BMO/repos")
      .then((res) => res.json())
      .then(setRepos);
  }, []);

  return (
    <div className="flex justify-center px-4 pt-24 min-h-screen">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center text-white mb-8">My Projects</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo: any) => (
            <div
              key={repo.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-md"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold text-lg hover:underline"
              >
                {repo.name}
              </a>
              <p className="text-white/70 text-sm mt-1">{repo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
