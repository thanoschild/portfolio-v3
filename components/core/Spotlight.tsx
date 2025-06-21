"use client";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useRef } from "react";

const Spotlight = () => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const { themeColors } = useTheme();

  function hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight || !themeColors.spotlight) return;

    const rgbaColor = hexToRgba(themeColors.spotlight, 0.15);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      spotlight.style.background = `radial-gradient(600px at ${x}px ${y}px, ${rgbaColor}, transparent 90%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [themeColors.spotlight]); // Re-run if spotlight color changes

  return (
    <div ref={spotlightRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};

export default Spotlight;
