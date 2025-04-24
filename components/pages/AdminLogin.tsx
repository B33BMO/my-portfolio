"use client";

import { useState } from "react";

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        onLogin(); // ✅ Login success
      } else {
        setError("❌ Invalid password. Try again, commander.");
      }
    } catch (err) {
      setError("⚠️ Login request failed. Is the server up?");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-white">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md border border-white/20 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Admin Password"
          className="w-full p-3 rounded bg-black/40 border border-white/20 text-white placeholder-white/50 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-cyan-600 hover:bg-cyan-500 transition py-2 rounded flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-t-transparent h-4 w-4 rounded-full"></span>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
}
