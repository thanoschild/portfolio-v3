"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { availableThemes } from "@/lib/theme";

export default function ThemeSwitcher() {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {Object.entries(availableThemes).map(([themeId, color]) => (
        <button
          key={themeId}
          aria-label={`Switch to ${themeId} theme`}
          onClick={() => setTheme(themeId)}
          className={`w-3 h-3 rounded-full transition-all duration-200
            ${currentTheme === themeId
              ? "scale-130"
              : "border-theme-sub hover:scale-105"}
          `}
          style={{ background: color }}
        />
      ))}
    </div>
  );
}
