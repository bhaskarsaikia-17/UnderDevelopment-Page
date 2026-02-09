import "./under-dev.css";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      {/* Dark Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Overlay Text Content */}
      <div className="relative z-10 mx-4 text-center">
        {/* Title */}
        <h1
          className="fade-in-text mb-4 text-5xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] md:text-7xl"
          style={{ fontFamily: "'Neighbor', sans-serif" }}
        >
          MANIFESTING GREATNESS
        </h1>

        {/* Subtitle with Typing Animation */}
        <p className="text-xl text-white/80 drop-shadow-lg md:text-2xl italic">
          <TypingAnimation
            text="The universe said wait for it..."
            duration={80}
            delay={1000}
          />
        </p>

        {/* Animated progress dots */}
        <div className="mt-8 flex justify-center gap-3">
          <span className="pulse-dot w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.7)]" style={{ animationDelay: "0ms" }} />
          <span className="pulse-dot w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.7)]" style={{ animationDelay: "200ms" }} />
          <span className="pulse-dot w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.7)]" style={{ animationDelay: "400ms" }} />
        </div>
      </div>

      {/* Watermark */}
      <a
        href="https://droplight.in"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-sm text-white/40 hover:text-white/70 transition-colors duration-300"
      >
        Droplight.in
      </a>
    </div>
  );
}
