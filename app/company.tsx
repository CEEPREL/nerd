"use client";
import React, { useState, useEffect } from "react";

export function CompanyName({
  name,
  className = "text-green-500",
  className1 = "text-yellow-500",
  time = 4000,
}: {
  name: string;
  className?: string;
  className1?: string;
  time?: number;
}) {
  const [showName, setShowName] = useState(true); // Manage which text is visible

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev); // Toggle between name
    }, time); // Switch every 4 seconds

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <div className={`w-fit inline group`}>
      <h1 className="font-medium inline text-gray-800 w-fit">
        <span className="sr-only pb-[4px]">{name}</span>
        <span
          aria-hidden="true"
          className="overflow-hidden pb-2 relative inline-flex whitespace-nowrap leading-none"
        >
          {/* Name  hmm zoom-in/out animation with color change */}
          <span
            className={`inline-flex transition-all duration-3000 ease-in-out ${
              showName
                ? `opacity-100 scale-105  ${className} `
                : `opacity-0 scale-95 ${className1} `
            }`}
          >
            {name.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </span>
      </h1>
    </div>
  );
}
