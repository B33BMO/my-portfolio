import { useEffect, useState } from "react";

export default function MinecraftPanel() {
  const [status, setStatus] = useState("Loading...");
  const [players, setPlayers] = useState(0);
  const [terminal, setTerminal] = useState<string[]>([]);
  const [command, setCommand] = useState("");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/minecraft/status");
        const data = await res.json();
        setStatus(data.status);
        setPlayers(data.players);
      } catch (e) {
        setStatus("Offline");
      }
    };

    const fetchLogs = async () => {
      try {
        const res = await fetch("/api/minecraft/logs");
        const data = await res.json();
        setTerminal(data.logs);
      } catch {}
    };

    fetchStatus();
    fetchLogs();
    const interval = setInterval(() => {
      fetchStatus();
      fetchLogs();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sendCommand = async () => {
    if (!command) return;
    await fetch("/api/minecraft/command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ command }),
    });
    setCommand("");
  };

  const controlServer = async (action: "start" | "stop" | "restart") => {
    await fetch(`/api/minecraft/${action}`, { method: "POST" });
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-4">Minecraft Server</h2>

      <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-6 border border-white/20">
        <p>Status: <span className={status === "Online" ? "text-green-400" : "text-red-400"}>{status}</span></p>
        <p>Players Online: {players}</p>

        <div className="space-x-4 mt-4">
          <button onClick={() => controlServer("start")} className="bg-green-600 px-4 py-2 rounded hover:bg-green-500">Start</button>
          <button onClick={() => controlServer("restart")} className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400">Restart</button>
          <button onClick={() => controlServer("stop")} className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">Stop</button>
        </div>
      </div>

      <div className="bg-black/70 p-4 rounded-xl border border-white/20 max-h-[400px] overflow-y-auto font-mono text-sm mb-4">
        {terminal.map((line, i) => (
          <div key={i} className="text-white/80 whitespace-pre-wrap">{line}</div>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <input
          className="flex-1 p-2 rounded bg-black/40 border border-white/20 text-white placeholder-white/40"
          placeholder="Enter RCON Command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendCommand()}
        />
        <button
          onClick={sendCommand}
          className="bg-cyan-600 px-4 py-2 rounded hover:bg-cyan-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}
