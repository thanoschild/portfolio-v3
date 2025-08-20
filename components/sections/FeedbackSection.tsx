"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  BsEmojiFrown,
  BsEmojiHeartEyes,
  BsEmojiNeutral,
  BsEmojiSmile,
  BsEmojiTear,
} from "react-icons/bs";
import { FaRegStar, FaTimes } from "react-icons/fa";

interface RatingOption {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
}

const ratingOptions: RatingOption[] = [
  { icon: BsEmojiHeartEyes, label: "Love it", value: 5 },
  { icon: BsEmojiSmile, label: "Like it", value: 4 },
  { icon: BsEmojiNeutral, label: "It's okay", value: 3 },
  { icon: BsEmojiFrown, label: "Dislike it", value: 2 },
  { icon: BsEmojiTear, label: "Hate it", value: 1 },
];

export default function FeedbackSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);

    // Here you can add logic to save the rating to your backend
    console.log("Rating submitted:", rating);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={modalRef}>
      {/* Dropdown */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 bg-theme-bg border border-theme-sub rounded-full shadow-lg transform transition-all duration-200 ease-out p-2">
          <div className="flex items-center gap-2">
            <span className="text-theme-text pl-1 text-sm whitespace-nowrap">Rate portfolio?</span>
            <div className="flex items-center gap-0.5">
              {ratingOptions.map((option) => {
                const IconComponent = option.icon;
                const isSelected = selectedRating === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleRatingSelect(option.value)}
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 group ${
                      isSelected
                        ? "bg-[var(--main-color)]/14 text-theme-main"
                        : "hover:bg-[var(--main-color)]/20 text-theme-text hover:text-theme-main"
                    }`}
                    title={option.label}
                  >
                    <IconComponent
                      className={`text-lg transition-all duration-200 group-hover:scale-110 cursor-pointer ${
                        isSelected ? "scale-110" : ""
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-center w-10 h-10 bg-[var(--main-color)]/20 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer`}
        aria-label={isOpen ? "Close rating modal" : "Rate this portfolio"}
      >
        {isOpen ? (
          <FaTimes className="w-5 h-5 text-theme-main" />
        ) : (
          <FaRegStar className="w-5 h-5 text-theme-main" />
        )}
      </button>
    </div>
  );
}
