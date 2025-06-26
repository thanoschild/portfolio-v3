import React from "react";
import { footerInfo } from "@/constant";
import { formatText } from "@/utils/formatText";
import ThemeSwitcher from "@/components/core/ThemeSwitcher";

export default function Footer() {
  return (
    <footer className="pb-16 text-sm sm:pb-0">
      {footerInfo.map(({ text, bold, links }, idx) => (
        <p key={idx}>{formatText(text, bold, links)}</p>
      ))}
      <div className="flex items-center justify-center p-2">
        <ThemeSwitcher />
      </div>
    </footer>
  );
};


