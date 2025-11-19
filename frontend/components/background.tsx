export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Soft radial vignette */}
      <div className="absolute inset-0 opacity-60 glow-backdrop" />

      {/* Neon aura line across center */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px">
        <div className="relative">
          <div
            className="h-[2px] w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(123,97,255,0), rgba(123,97,255,0.95), rgba(0,212,255,0.95), rgba(123,97,255,0.95), rgba(123,97,255,0))",
            }}
          />
          <div
            className="absolute inset-0 blur-2xl opacity-60"
            style={{
              background:
                "linear-gradient(90deg, rgba(123,97,255,0), rgba(123,97,255,0.85), rgba(0,212,255,0.85), rgba(123,97,255,0.85), rgba(123,97,255,0))",
            }}
          />
        </div>
      </div>
    </div>
  )
}
