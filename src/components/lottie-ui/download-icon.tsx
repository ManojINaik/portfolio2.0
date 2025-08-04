"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import InboxDownAnimation from "../../lottie/inbox-down/InboxDown.json";
import InboxDownLightAnimation from "../../lottie/inbox-down/InboxDownLight.json";

const Download = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLightMode = resolvedTheme === "light";
  const downloadContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function getLottie() {
    const lot = await import("lottie-web");

    if (!downloadContainer.current) return;
    lot.default.loadAnimation({
      name: "DownloadIcon",
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isLightMode ? InboxDownAnimation : InboxDownLightAnimation,
      container: downloadContainer.current,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }

  async function destroyLottie() {
    const lot = await import("lottie-web");
    lot.default.destroy("DownloadIcon");
  }

  useEffect(() => {
    if (mounted) {
      getLottie();

      return () => {
        destroyLottie();
      };
    }
  }, [mounted, isLightMode, getLottie]);

  const lottieHover = async () => {
    const lot = await import("lottie-web");
    lot.default.play("DownloadIcon");
  }

  const lottieLeave = async () => {
    const lot = await import("lottie-web");
    lot.default.stop("DownloadIcon");
  }

  if (!mounted) {
    return (
      <a
        href="/manojIshwarNaik_Resume.pdf"
        download
        className="relative z-10"
      >
        <div className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity" />
      </a>
    );
  }

  return (
    <a
      href="/manojIshwarNaik_Resume.pdf"
      download
      className="relative z-10"
    >
      <div
        ref={downloadContainer}
        onMouseEnter={lottieHover}
        onMouseLeave={lottieLeave}
        className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default Download;
