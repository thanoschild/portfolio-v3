"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/lib/theme";

export default function ThemeSwitcher() {
  const { currentTheme, setTheme } = useTheme();

  const availableThemes: Record<string, string> = {
    purple: "#C084FC",
    blue: "#5EEAD4",
    green: "#79a617",
    orange: "#F97316",
    white: "#444444"
  };

  return (
    <div className="flex items-center gap-2">
      {themes.map((themeId) => (
        <button
          key={themeId}
          aria-label={`Switch to ${themeId} theme`}
          onClick={() => setTheme(themeId)}
          className={`w-3 h-3 rounded-full transition-all duration-200
            ${currentTheme === themeId
              ? "scale-130"
              : "border-theme-sub hover:scale-105"}
          `}
          style={{ background: availableThemes[themeId] || "#ccc" }}
        />
      ))}
    </div>
  );
}
