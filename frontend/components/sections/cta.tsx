import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="relative mt-16 md:mt-24 lg:mt-28">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-2xl p-[1px] card-gradient-bright"
          style={{ boxShadow: "0 0 24px rgba(0,212,255,0.20)" }}
        >
          <div className="rounded-2xl bg-black/60 ring-1 ring-white/10 px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <h3
                  className="text-xl sm:text-2xl font-semibold tracking-tight"
                  style={{ fontFamily: "Space Grotesk, system-ui" }}
                >
                  Ready to accelerate your learning?
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Join thousands of learners building in-demand skills with guided, hands-on practice.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black neon-gradient"
                >
                  Create free account <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10 transition-all"
                >
                  Talk to us <MessageSquare className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-zinc-500">No credit card required</p>
      </div>
    </section>
  )
}
