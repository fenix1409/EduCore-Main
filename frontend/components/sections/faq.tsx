import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, upgrades and downgrades take effect immediately and are prorated.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "The Starter plan is free forever. Pro includes a 7‑day trial.",
    },
    {
      question: "Is there a student discount?",
      answer: "Yes, we offer 40% off Pro with a valid student email.",
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
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm text-zinc-400">Everything you need to know about Educora.</p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-white/10 bg-white/5 p-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between">
                <span className="text-sm font-medium">{faq.question}</span>
                <ChevronDown className="size-4 text-zinc-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-zinc-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
