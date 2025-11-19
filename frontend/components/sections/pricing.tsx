import { Check, X, ArrowRight } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      badge: "Get started",
      features: [
        { name: "3 courses", included: true },
        { name: "Practice tasks", included: true },
        { name: "AI mentor", included: false },
      ],
      cta: "Get started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/mo",
      badge: "Most popular",
      features: [
        { name: "All courses", included: true },
        { name: "AI mentor & feedback", included: true },
        { name: "Career projects", included: true },
      ],
      cta: "Upgrade to Pro",
      highlight: true,
    },
    {
      name: "Teams",
      price: "$49",
      period: "/mo",
      badge: "For companies",
      features: [
        { name: "5 seats included", included: true },
        { name: "Admin & analytics", included: true },
        { name: "SSO available", included: true },
      ],
      cta: "Contact sales",
      highlight: false,
    },
  ]

  return (
    <section className="relative mt-16 md:mt-24 lg:mt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
            style={{ fontFamily: "Space Grotesk, system-ui" }}
          >
            Simple, transparent pricing
          </h2>
          <p className="mt-2 text-sm text-zinc-400">Start free, upgrade anytime. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl p-[1px]"
              style={{
                background: plan.highlight
                  ? "linear-gradient(120deg, rgba(0,212,255,0.45), rgba(123,97,255,0.45))"
                  : "linear-gradient(120deg, rgba(0,212,255,0.25), rgba(123,97,255,0.25))",
                boxShadow: plan.highlight ? "0 0 24px rgba(0,212,255,0.20), 0 0 28px rgba(123,97,255,0.15)" : "none",
              }}
            >
              <div
                className={`flex flex-col h-full rounded-2xl ring-1 ring-white/10 p-6 ${plan.highlight ? "bg-black/60" : "bg-black/50"}`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium">{plan.name}</div>
                  <span className={`text-xs ${plan.highlight ? "text-cyan-300" : "text-zinc-400"}`}>{plan.badge}</span>
                </div>
                <div
                  className="mt-3 text-3xl font-semibold tracking-tight"
                  style={{ fontFamily: "Space Grotesk, system-ui" }}
                >
                  {plan.price}
                  {plan.period && <span className="text-base text-zinc-400">{plan.period}</span>}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check className="size-4 text-emerald-300" />
                      ) : (
                        <X className="size-4 text-zinc-500" />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  {plan.highlight ? (
                    <button className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black neon-gradient">
                      {plan.cta} <ArrowRight className="size-4" />
                    </button>
                  ) : (
                    <button className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-all">
                      {plan.cta}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-zinc-500">Prices in USD. Cancel anytime.</p>
      </div>
    </section>
  )
}
