import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maya Chen",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=200&auto=format&fit=crop",
      text: "The adaptive path and instant feedback helped me land my first dev role in 3 months.",
    },
    {
      name: "Samir Patel",
      role: "Data Analyst",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
      text: "Projects are practical and portfolio-ready. Recruiters actually asked about them.",
    },
    {
      name: "Ana Gómez",
      role: "ML Enthusiast",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
      text: "The AI mentor explains complex topics clearly. My progress skyrocketed.",
    },
  ]

  return (
    <section className="relative mt-16 md:mt-24 lg:mt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
            style={{ fontFamily: "Space Grotesk, system-ui" }}
          >
            What learners are saying
          </h2>
          <div className="hidden sm:flex items-center gap-2 text-sm text-zinc-400">
            <Star className="size-4 text-cyan-300" />
            4.9/5 average rating
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="rounded-xl p-[1px] h-full card-gradient">
              <div className="h-full rounded-xl bg-black/50 ring-1 ring-white/10 p-5">
                <div className="flex items-center gap-3">
                  <Image
                    width={36}
                    height={36}
                    className="rounded-full ring-1 ring-white/10 object-cover"
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                  <div>
                    <div className="text-sm font-medium">{testimonial.name}</div>
                    <div className="text-xs text-zinc-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-300">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
