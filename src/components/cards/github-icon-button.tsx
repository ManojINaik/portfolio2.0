"use client"

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface GithubIconButtonProps {
  href: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

const GithubIconButton: React.FC<GithubIconButtonProps> = ({
  href,
  className = "",
  size = "md",
  label = "View repository",
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const sizeClasses: Record<string, string> = {
    sm: "h-8 w-8 p-1.5",
    md: "h-10 w-10 p-2",
    lg: "h-12 w-12 p-2.5",
  };

  const iconSizes: Record<string, string> = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const isDark = resolvedTheme === "dark";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`relative z-10 inline-flex items-center justify-center rounded-full border transition-all duration-200 ${
        isDark
          ? "border-white/10 hover:border-white/30 text-white/70 hover:text-white hover:bg-white/5"
          : "border-gray-200 hover:border-gray-400 text-gray-700 hover:text-black hover:bg-gray-50"
      } ${sizeClasses[size]} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${iconSizes[size]}`}
        aria-hidden="true"
      >
        <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.86 10.932c.575.105.787-.245.787-.553 0-.274-.01-1-.015-1.962-3.197.695-3.872-1.542-3.872-1.542-.523-1.328-1.278-1.682-1.278-1.682-1.045-.715.079-.7.079-.7 1.156.081 1.765 1.188 1.765 1.188 1.027 1.76 2.695 1.252 3.35.958.104-.744.402-1.252.73-1.541-2.553-.29-5.236-1.276-5.236-5.678 0-1.255.448-2.28 1.182-3.084-.12-.29-.512-1.46.112-3.043 0 0 .964-.309 3.16 1.178a10.91 10.91 0 0 1 2.878-.387c.976.004 1.96.132 2.878.387 2.196-1.487 3.158-1.178 3.158-1.178.626 1.583.234 2.753.115 3.043.736.804 1.18 1.829 1.18 3.084 0 4.412-2.688 5.385-5.252 5.668.414.357.784 1.068.784 2.154 0 1.554-.014 2.808-.014 3.19 0 .31.21.664.794.551A11.504 11.504 0 0 0 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" />
      </svg>
    </a>
  );
};

export default GithubIconButton;


