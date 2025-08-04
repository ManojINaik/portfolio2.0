"use client"

import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface PullRequestIconProps {
  link: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const PullRequestIcon = ({ link, className = "", size = "md" }: PullRequestIconProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses = {
    sm: "h-8 w-8 p-1.5",
    md: "h-12 w-12 p-2.5",
    lg: "h-14 w-14 p-3"
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  };

  if (!mounted) {
    return (
      <div className={`${sizeClasses[size]} rounded-full border border-white/10 bg-transparent ${className}`}>
        <div className={`${iconSizes[size]} opacity-50`} />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative z-10 inline-flex items-center justify-center rounded-full border transition-all duration-200
        ${isDark 
          ? 'border-white/10 hover:border-white/30 text-white/50 hover:text-white hover:bg-white/5' 
          : 'border-gray-200 hover:border-gray-400 text-gray-500 hover:text-gray-900 hover:bg-gray-50'
        }
        ${sizeClasses[size]} ${className}
      `}
      aria-label="View pull requests"
      title="View pull requests"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className={`${iconSizes[size]} transition-all duration-200 ${isHovered ? 'scale-110 opacity-100' : 'opacity-50 hover:opacity-100'}`}
        aria-hidden="true"
      >
        {/* Pull request icon - proper GitHub-style PR icon */}
        <path 
          fillRule="evenodd" 
          d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
        />
      </svg>
    </a>
  );
};

export default PullRequestIcon;