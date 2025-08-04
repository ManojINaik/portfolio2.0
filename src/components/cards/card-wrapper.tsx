import { ReactNode, useEffect, useState } from "react"
import { useTheme } from "next-themes"

const shineMaskImage = `
  radial-gradient(
    circle at 50% 150%,
    white,
    transparent
  )`

interface CardWrapperProps {
  children: ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="group w-full h-full relative overflow-hidden rounded-3xl p-px bg-white/60 backdrop-blur-md border border-black/5 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25),0_18px_40px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 transform-gpu will-change-transform">
        <div className="absolute inset-px rounded-3xl bg-white/70 backdrop-blur-sm" />
        <div className="relative h-full">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="group w-full h-full relative overflow-hidden rounded-3xl p-px dark:bg-white/10 bg-white/60 backdrop-blur-md border dark:border-white/10 border-black/5 ring-1 ring-black/5 dark:ring-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35),0_24px_60px_-18px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6),0_24px_60px_-18px_rgba(0,0,0,0.5)] transition-all duration-300 transform-gpu will-change-transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.4),0_32px_80px_-20px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.75),0_36px_90px_-22px_rgba(0,0,0,0.65)]">
      {resolvedTheme === "dark" && (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 50% 150%,
                  #208de52b,
                  transparent
                )`,
            }}
          />
          <div
            className="shine absolute -inset-2 opacity-40 blur-md z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-60 mix-blend-overlay"
            style={{
              maskImage: shineMaskImage,
              WebkitMaskImage: shineMaskImage,
              backgroundImage: `
                conic-gradient(
                  from -45deg at 50% 150%,
                  transparent 0deg,
                  #10071e 15deg,
                  transparent 30deg,
                  #10071e 45deg,
                  transparent 60deg,
                  #10071e 75deg,
                  transparent 90deg
                )`,
            }}
          />

          <div className="absolute inset-px rounded-3xl bg-zinc-950/40 backdrop-blur-sm transition-colors duration-300 group-hover:bg-black/50" />
        </>
      )}
      {resolvedTheme === "light" && (
        <>
          <div className="absolute inset-px rounded-3xl bg-white/70 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/80" />

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(
                  80% 6% at 50% 103%,
                  #6f38fc44,
                  transparent
                )
              `,
            }}
          />
        </>
      )}

      {/* Soft elliptical drop shadow to simulate depth under the card */}
      <div className="pointer-events-none absolute -inset-x-6 -bottom-12 h-24 rounded-[100%] bg-black/35 dark:bg-black/70 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

      <div className="relative h-full">
        {children}
      </div>
    </div>
  )
}