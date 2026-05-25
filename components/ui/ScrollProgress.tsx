"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current =
        (window.scrollY / total) * 100;

      setScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        fixed top-0 left-0
        h-[3px]
        z-[100]
        bg-red-700
        transition-all duration-150
      "
      style={{ width: `${scroll}%` }}
    />
  );
}