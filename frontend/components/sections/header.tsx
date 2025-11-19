"use client"
import Link from "next/link";
import UserDropdown from "../UserDropdown";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../dashboard/dashboard-nav";

const mainLinks = [
  { href: '#', label: 'Features' },
  { href: '#', label: 'Courses' },
  { href: '#', label: 'Pricing' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '#', label: 'About' },
];

const dashboardLinks = [
  { href: '/dashboard/overview', label: 'Overview' },
  { href: '/dashboard/courses', label: 'My Courses' },
  { href: '/dashboard/goals', label: 'Goals' },
  { href: '/dashboard/achievements', label: 'Achievements' },
];

export default function Header({ user }: { user?: User }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');
  const links = isDashboard ? dashboardLinks : mainLinks;
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="px-4 sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-black/30 bg-black/10 border-b border-white/10 w-full">
        <nav className="flex items-center justify-between py-4">
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <Menu className="text-white w-6 h-6" />
          </button>
          <Link href={'/'} className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md ring-1 ring-white/15 bg-black/60 relative overflow-hidden">
              <span className="absolute inset-0 conic-gradient" />
              <div className="absolute inset-0.5 rounded bg-[#0C0C10]" />
            </div>
            <span className="font-semibold tracking-tight" style={{ fontFamily: "Space Grotesk, system-ui" }}>
              EDUCORA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${pathname === item.href
                  ? "text-white"
                  : "text-zinc-300 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <UserDropdown user={user} />
            ) : (
              <button className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                <Link href={'/sign-in'}>Sign in</Link>
              </button>
            )}
          </div>
        </nav>


        {open && (
          <div className="lg:hidden h-screen">
            {/* OVERLAY */}
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* MENU PANEL */}
            <aside className="fixed top-0 left-0 h-full w-64 bg-black/30 backdrop-blur-xl border-r border-white/10 z-50 animate-slideRight">
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h2 className="text-white font-semibold text-lg">Menu</h2>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                >
                  <X className="text-white w-6 h-6" />
                </button>
              </div>

              <nav className="p-6 space-y-2 bg-black">
                {navItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.label}
                    onClick={() => setOpen(false)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all 
                  ${pathname === item.href
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/30"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>

                    {item.badge !== null && (
                      <span className="ml-auto text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
            </aside>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideRight {
          animation: slideRight 0.25s ease-out;
        }
      `}</style>
    </>
  )
}