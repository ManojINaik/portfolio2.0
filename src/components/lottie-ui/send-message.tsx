"use client"

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import SendmessageAnimation from "../../lottie/arrow/Iconly-Sendmessage.json";
import SendmessageLightAnimation from "../../lottie/arrow/Iconly-SendmessageLight.json";

const SendmessageIcon = ({ link, lottieName }: { link: string, lottieName: string }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLightMode = resolvedTheme === "light";
  const sendMessageContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function getLottie(lottieName: string) {
    const lot = await import("lottie-web");

    if (!sendMessageContainer.current) return;
    lot.default.loadAnimation({
      name: lottieName,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isLightMode ? SendmessageAnimation : SendmessageLightAnimation,
      container: sendMessageContainer.current,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMin slice',
      },
    });
  }

  async function destroyLottie(lottieName: string) {
    const lot = await import("lottie-web");
    lot.default.destroy(lottieName);
  }

  useEffect(() => {
    if (mounted) {
      getLottie(lottieName);

      return () => {
        destroyLottie(lottieName);
      };
    }
  }, [mounted, isLightMode, resolvedTheme, lottieName]);

  const lottieHover = async () => {
    const lot = await import("lottie-web");
    lot.default.play(lottieName);
  }

  const lottieLeave = async () => {
    const lot = await import("lottie-web");
    lot.default.stop(lottieName);
  }

  if (!mounted) {
    return (
      <a
        href={link}
        target='_blank'
        rel='noreferrer noopener'
        className="relative h-12 w-12 z-10 hover:bg-white hover:border border-white/10 flex items-center justify-center rounded-full transition-all"
      >
        <div className="h-8 w-8 opacity-50 hover:opacity-100 transition-opacity" />
      </a>
    );
  }

  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer noopener'
      className="relative h-12 w-12 z-10 hover:bg-white dark:hover:bg-zinc-700/25 hover:border border-white/10 flex items-center justify-center rounded-full transition-all"
    >
      <div
        ref={sendMessageContainer}
        onMouseEnter={lottieHover}
        onMouseLeave={lottieLeave}
        className={`h-8 w-8 opacity-50 ${!isLightMode ? "" : "opacity-50"} hover:opacity-100 transition-opacity`}
      />
    </a>
  );
};

export default SendmessageIcon;
