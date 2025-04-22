"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function BackgroundVideo({ page }: { page: string }) {
  const [isDayzVisible, setIsDayzVisible] = useState(false);

  useEffect(() => {
    setIsDayzVisible(page === "dayz");
  }, [page]);

  return (
    <>
      {/* Default Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={clsx(
          "fixed top-0 left-0 w-full h-full object-cover z-[-2] transition-opacity duration-500",
          {
            "opacity-0": isDayzVisible,
            "opacity-100": !isDayzVisible,
          }
        )}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* DayZ Background Video */}
      {isDayzVisible && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-500 opacity-100"
        >
          <source src="/dayz.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
