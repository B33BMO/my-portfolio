"use client";

import { useEffect, useRef } from "react";

export default function WireframeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("🎯 Retina canvas mounted");

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("❌ No 2D context");
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.scale(dpr, dpr);

    console.log("📏 Scaled Canvas size:", canvas.width, "x", canvas.height, "DPR:", dpr);

    // Fill background
    ctx.fillStyle = "rgba(0, 255, 255, 0.2)";
    ctx.fillRect(0, 0, width, height);

    // Giant center dot
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 20, 0, Math.PI * 2);
    ctx.fill();

    // Debug text
    ctx.fillStyle = "white";
    ctx.font = "24px monospace";
    ctx.fillText("🎯 RETINA DRAWING WORKS", 40, 40);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "transparent"
      }}
    />
  );
}
