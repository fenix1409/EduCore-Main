import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-16 md:mt-24 border-t border-white/10 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-tight text-white" style={{ fontFamily: "Space Grotesk, system-ui" }}>
            EDUCORA
          </span>
          <span className="text-zinc-500">© 2025</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
