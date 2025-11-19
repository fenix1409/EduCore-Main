import { Sparkles, Cpu, Bot, Briefcase } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Adaptive learning",
      description: "Dynamic difficulty and tailored paths that adjust to your pace and goals.",
    },
    {
      icon: Cpu,
      title: "Hands-on practice",
      description: "Real coding tasks and projects that build a portfolio employers notice.",
    },
    {
      icon: Bot,
      title: "AI feedback",
      description: "Instant explanations, hints, and code reviews to accelerate learning.",
    },
    {
      icon: Briefcase,
      title: "Career-focused",
      description: "Interview prep, job-aligned skills, and projects that show impact.",
    },
  ]

  return (
    <section className="relative mt-16 md:mt-24 lg:mt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-semibold tracking-tight"
              style={{ fontFamily: "Space Grotesk, system-ui" }}
            >
              Why learners choose Educora
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
              Everything you need to go from zero to hired—faster and with confidence.
            </p>
          </div>
          <div className="hidden sm:block text-sm text-zinc-400">Continuously improving</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="rounded-xl p-[1px] card-gradient">
                <div className="h-full rounded-xl bg-black/50 ring-1 ring-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                      <Icon className="size-4 text-cyan-300" />
                    </div>
                    <div className="text-sm font-medium">{feature.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-zinc-400">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Logos */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-zinc-400">
            {["ALPHA", "NOVA", "ECHO", "ATLAS", "PRISM", "QUARK"].map((logo) => (
              <span key={logo} className="text-xs tracking-tight px-2.5 py-1 rounded bg-black/40 ring-1 ring-white/10">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
