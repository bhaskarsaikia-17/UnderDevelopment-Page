import "./under-dev.css";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/underdevelopment.jpeg')" }}
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
          Under Development
        </h1>

        {/* Subtitle */}
        <p className="fade-in-text-delayed text-xl text-white/80 drop-shadow-lg md:text-2xl">
          Something crazy brewing.....
        </p>

        {/* Animated progress dots */}
        <div className="mt-8 flex justify-center gap-3">
          <span className="pulse-dot w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.7)]" style={{ animationDelay: "0ms" }} />
          <span className="pulse-dot w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.7)]" style={{ animationDelay: "200ms" }} />
          <span className="pulse-dot w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.7)]" style={{ animationDelay: "400ms" }} />
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-sm text-white/40 hover:text-white/70 transition-colors duration-300">
        Droplight.in
      </div>
    </div>
  );
}
