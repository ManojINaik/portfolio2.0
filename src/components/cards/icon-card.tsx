"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CardWrapper from "./card-wrapper";

const IconCard = ({ title, link }: { title: string, link: string }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = {
    "Linkedin": {
      src: resolvedTheme === "dark" ? "/social-icons/linkedin.svg" : "/social-icons/linkedin-dark.svg",
      classNames: "aspect-square",
    },
    "Github": {
      src: resolvedTheme === "dark" ? "/social-icons/github.svg" : "/social-icons/github-dark.svg",
      classNames: "aspect-[49/48]",
    },
    "Codepen": {
      src: resolvedTheme === "dark" ? "/social-icons/codepen.svg" : "/social-icons/codepen-dark.svg",
      classNames: "aspect-square",
    },
    "Email": {
      src: resolvedTheme === "dark" ? "/social-icons/email.svg" : "/social-icons/email-dark.svg",
      classNames: "aspect-[25/24]",
    },
    "Pull Request": {
      src: resolvedTheme === "dark" ? "/social-icons/pr.svg" : "/social-icons/pr-dark.svg",
      classNames: "aspect-square",
    },
  } as const;

  if (!mounted) {
    return (
      <CardWrapper>
        <div className="flex items-center justify-center w-full h-full opacity-80 hover:opacity-100 transition-opacity relative z-10">
          <a
            className="w-[55%] h-[55%] flex items-center justify-center rounded-3xl"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            title={title}
          >
            <div className="relative h-full w-auto aspect-square">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </a>
        </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper>
      <div className="flex items-center justify-center w-full h-full opacity-80 hover:opacity-100 transition-opacity relative z-10">
        <a
          className="w-[55%] h-[55%] flex items-center justify-center rounded-3xl"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
          title={title}
        >
          <div className={`relative h-full w-auto ${icons[title as keyof typeof icons]?.classNames}`}>
            <Image
              src={icons[title as keyof typeof icons]?.src}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, 200px"
              priority={false}
            />
          </div>
        </a>
      </div>
    </CardWrapper>
  );
};

export default IconCard;
