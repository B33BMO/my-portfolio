"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Black_Ops_One } from "next/font/google";

const blackOps = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});

const sections = [
  {
    key: "basebuilding",
    title: "Basebuilding",
    bg: "https://images.unsplash.com/photo-1719679041967-3873e5b3daba?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      { src: "https://i.ytimg.com/vi/Rai2bc0bRyI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVW1Cp429VcXl094SU6s7FurftEg", label: "Flag Pole" },
      { src: "https://i.redd.it/ni418ixshzu41.png", label: "Walls and Gates" },
      { src: "https://i.imgur.com/suciLRY.png", label: "Double Door" },
      { src: "https://i.redd.it/p0bu10i24vd51.png", label: "Watchtower" },
    ],
  },
  {
    key: "storage",
    title: "Storage",
    bg: "https://images.unsplash.com/photo-1642076371303-5eb3e6a7b81e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      { src: "https://thenorthmendayz.com/wp-content/uploads/2025/04/Nytt_projekt.png", label: "MMG Crates" },
      { src: "https://i.imgur.com/KyIjgon.jpeg", label: "Storage Methods" },
    ],
  },
  {
    key: "weapons",
    title: "Weapons",
    bg: "https://images.unsplash.com/photo-1603012948341-3ba25e139d83?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      { src: "https://i.redd.it/1etzao5uzy2d1.png", label: "Guns" },
      { src: "https://images.steamusercontent.com/ugc/266091413825826578/59E2BD3A25221A18E02A9F64B5F58755235AA70B/", label: "Melee" },
    ],
  },
  {
    key: "crafting",
    title: "Crafting",
    bg: "https://images.unsplash.com/photo-1723740629140-76192bf59c64?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      { src: "https://preview.redd.it/dayztips-elemental-crafting-chart-1-17-v0-bxb8bzoaxgw81.png?width=1080&crop=smart&auto=webp&s=a975691e025bf07ab3c5394a104900f000fcdb8d", label: "Crafting Chart" },

    ],
  },
  {
    key: "medical",
    title: "Medical",
    bg: "https://images.unsplash.com/photo-1713362280665-21ffc10ae3b0?q=80&w=1643&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      { src: "https://preview.redd.it/ls5wn390vrm51.png?width=1080&crop=smart&auto=webp&s=7c944ec4523aee13fe6d48e4ffb438a55ccac63a", label: "Diseases" },
      { src: "https://preview.redd.it/3en8gx80vrm51.png?width=1080&crop=smart&auto=webp&s=a12850719f2b6429a6843f050a5f405f13f47f9f", label: "Cholera" },
      { src: "https://preview.redd.it/2jhg5ia0vrm51.png?width=1080&crop=smart&auto=webp&s=e4415c1464aa4126928ae66da2e2081349d78ad3", label: "Preventive Medicine" },
      { src: "https://preview.redd.it/iuyvl290vrm51.png?width=1080&crop=smart&auto=webp&s=f3bed63fe9e248799dcda84107eb84b811b175e7", label: "Medicine Guide" },
      { src: "https://preview.redd.it/rz3any80vrm51.png?width=1080&crop=smart&auto=webp&s=8d45336e0ab7c983a6f5f8351d5321323c078921", label: "Blood Donors" },
      { src: "https://preview.redd.it/ln1kxt80vrm51.png?width=1080&crop=smart&auto=webp&s=dff825f2e9b6c0f4adf5a60ded928ff9a62bb26c", label: "Biological Protection" },
      { src: "https://preview.redd.it/8jvbgy80vrm51.png?width=1080&crop=smart&auto=webp&s=0886e4cb8670ced42c92480d74ca2c06c23d71cd", label: "Epinephrine" },
      { src: "https://preview.redd.it/uuxqhr80vrm51.png?width=1080&crop=smart&auto=webp&s=185897656a51637c2e9404009fc202d352d9f775", label: "Bandages" },
      { src: "https://preview.redd.it/8hwhhh6bvrm51.png?width=1080&crop=smart&auto=webp&s=adf912f25338bbc32b304c2be734f5b9955bf052", label: "Salmonellosis" },
    ],
  },
];

export default function DayZ() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const section = sections.find((s) => s.key === activeSection);

  if (expandedImage) {
    return (
      <div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        onClick={() => setExpandedImage(null)}
      >
        <img
          src={expandedImage}
          alt="Expanded view"
          className="max-w-full max-h-full rounded-xl shadow-2xl"
        />
      </div>
    );
  }

  return (
    <div className="p-8 text-center">
      {!activeSection ? (
        <>
          <h1 className="text-4xl font-bold text-white mb-8">DayZ Guide</h1>

          {/* 💡 This container adds scroll behavior only if needed */}
          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto px-1 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section, i) => (
                <motion.div
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="cursor-pointer relative rounded-xl overflow-hidden shadow-lg group"
                >
                  <div
                    style={{
                      backgroundImage: `url(${section.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="w-full h-48 relative"
                  >
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h2
                        className={`${blackOps.className} text-white/90 text-xl uppercase tracking-widest z-10`}
                      >
                        {section.title}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => setActiveSection(null)}
            className="text-white bg-white-600 px-4 py-2 rounded-md mb-6 hover:bg-white-500 transition"
          >
            ← Back
          </button>
          <h2 className="text-3xl text-white font-semibold mb-6">
            {section?.title}
          </h2>
          <div className="max-h-[calc(100vh-12rem)] overflow-y-auto pr-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {section?.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={() => setExpandedImage(img.src)}
                  className="cursor-pointer overflow-hidden rounded-md shadow-md group"
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    width={300}
                    height={200}
                    className="object-cover w-full h-32 sm:h-36 md:h-40 group-hover:scale-105 transition-transform duration-300 border border-white/10 rounded"
                  />
                  <p className="text-white mt-2 text-center text-sm">
                    {img.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}