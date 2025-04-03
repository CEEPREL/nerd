"use client";
import React, { useState, useEffect } from "react";

export function NameTransition({
  name,
  subname,
  className = "",
  className1 = "",
  interval = 9000,
}: {
  name: string;
  subname: string;
  className?: string;
  className1?: string;
  interval?: number;
}) {
  const [showName, setShowName] = useState(true); // Manage which text is visible

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev); // Toggle between name and subname
    }, 9000); // Switch every 4 seconds

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 7)];
    }
    return color;
  };

  return (
    <div className={`w-fit inline group ${className}`}>
      <h1 className="font-medium inline text-gray-800 w-fit">
        <span className="sr-only pb-[4px]">{name}</span>
        <span
          aria-hidden="true"
          className="overflow-hidden relative inline-flex whitespace-nowrap  leading-none"
        >
          {/* Name fade-out animation */}
          <span
            className={`inline-flex text-gray-700 pb-[2px] transition-all  ${className1} ease-in-out ${
              showName ? "opacity-100" : "opacity-0"
            }`}
          >
            {name.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  color: getRandomColor(), // Random color for each letter
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>

          {/* Subname fade-in animation */}
          <span
            className={`inline-flex text-gray-700 absolute left-0 top-0 transition-all duration-2000 ease-in-out ${
              !showName ? "opacity-100" : "opacity-0"
            }`}
          >
            {subname.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  transitionDelay: `${index * 25}ms`,
                  color: getRandomColor(), // Random color for each letter
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </span>
      </h1>
    </div>
  );
}
