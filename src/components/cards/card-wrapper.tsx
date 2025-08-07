import { ReactNode } from "react"

interface CardWrapperProps {
  children: ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <div className="group w-full h-full relative overflow-hidden rounded-3xl p-px bg-white/60 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 ring-1 ring-inset ring-black/5 dark:ring-white/10 transition-all duration-300 transform-gpu will-change-transform hover:-translate-y-0.5">
      {/* Restore the original tinted vibes via subtle radial gradients per theme */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 150%, #208de52b, transparent)`,
        }}
      />
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(80% 6% at 50% 103%, #6f38fc44, transparent)`,
        }}
      />

      {/* Card surface */}
      <div className="absolute inset-px z-10 rounded-3xl bg-white/70 dark:bg-zinc-950/40 backdrop-blur-sm transition-colors duration-300" />

      {/* Inset side vignettes (soft, no visible lines) */}
      <div className="pointer-events-none absolute inset-y-5 left-1 z-20 w-8 rounded-3xl blur-md bg-gradient-to-r from-black/15 to-transparent dark:from-black/40 opacity-25 group-hover:opacity-35 transition-opacity mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-y-5 right-1 z-20 w-8 rounded-3xl blur-md bg-gradient-to-l from-black/15 to-transparent dark:from-black/40 opacity-25 group-hover:opacity-35 transition-opacity mix-blend-multiply" />

      <div className="relative z-30 h-full">
        {children}
      </div>
    </div>
  )
}