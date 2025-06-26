"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
    const [count, setCount] = useState(73);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 404) {
          clearInterval(interval);
          return 404;
        }
        return prev + 11; 
      });
    }, 20); 

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-theme-bg px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-theme-main">
          {count}
        </h1>
        <p className="text-xl mb-2 text-theme-text">Page Not Found</p>
        <p className="text-sm text-theme-text-sub mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="group flex items-center justify-center gap-3 px-6 py-2 rounded-full transition hover:text-theme-main"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            <FaArrowLeftLong className="text-sm font-bold" />
          </span>
          Go Home
        </Link>
      </div>
    </main>
  );
}
