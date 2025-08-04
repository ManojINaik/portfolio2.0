"use client"

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import EyeAnimation from "../../lottie/eye/Eye.json";
import EyeLightAnimation from "../../lottie/eye/EyeLight.json";

const SendIcon = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLightMode = resolvedTheme === "light";
  const sendIconContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function getLottie() {
    const lot = await import("lottie-web");

    if (!sendIconContainer.current) return;
    lot.default.loadAnimation({
      name: "SendIcon",
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isLightMode ? EyeLightAnimation : EyeAnimation,
      container: sendIconContainer.current,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }

  async function destroyLottie() {
    const lot = await import("lottie-web");
    lot.default.destroy("SendIcon");
  }

  useEffect(() => {
    if (mounted) {
      getLottie();

      return () => {
        destroyLottie();
      };
    }
  }, [mounted, isLightMode, resolvedTheme, getLottie]);

  const lottieHover = async () => {
    const lot = await import("lottie-web");
    lot.default.play("SendIcon");
  }

  const lottieLeave = async () => {
    const lot = await import("lottie-web");
    lot.default.stop("SendIcon");
  }

  if (!mounted) {
    return (
      <div className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity relative z-10" />
    );
  }

  return (
    <div
      ref={sendIconContainer}
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
      className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity relative z-10"
    />
  );
};

export default SendIcon;
