import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-16 md:pt-24 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-64 w-[80%] opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(0,212,255,0.08), rgba(123,97,255,0.06), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
          style={{ fontFamily: "Space Grotesk, system-ui" }}
        >
          Learn. Grow. Achieve without limits.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-medium">
          Educora helps learners master coding and AI faster with personalized learning journeys.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#"
            className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span
              className="absolute inset-0 rounded-full blur opacity-80"
              style={{
                background: "linear-gradient(90deg, #00D4FF, #7B61FF)",
                boxShadow: "0 0 24px rgba(0,212,255,0.35), 0 0 36px rgba(123,97,255,0.25)",
              }}
            />
            <span className="relative rounded-full px-6 py-3 neon-gradient">Start Learning</span>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span>See Courses</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Social proof avatars */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=200&auto=format&fit=crop",
            ].map((src, i) => (
              <Image
                width={32}
                height={32}
                key={i}
                className="rounded-full ring-2 ring-black/50 object-cover"
                src={src || "/placeholder.svg"}
                alt={`Learner avatar ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-sm text-zinc-400">5,000+ learners worldwide</span>
        </div>
      </div>
    </section>
  )
}
