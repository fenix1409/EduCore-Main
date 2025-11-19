"use client";

import {
  LayoutDashboard,
  BookOpen,
  Target,
  Award,
  Settings,
  BotIcon,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard/overview", badge: null },
  { icon: BotIcon, label: "AI Mentor", href: "/dashboard/ai-mentor-chat", badge: null },
  { icon: BookOpen, label: "My Courses", href: "/dashboard/courses", badge: 3 },
  { icon: Target, label: "Learning Goals", href: "/dashboard/goals", badge: null },
  { icon: Award, label: "Achievements", href: "/dashboard/achievements", badge: 2 },
  { icon: Settings, label: "Settings", href: "/dashboard/settings", badge: null },
];

export default function DashboardNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOP MENU BUTTON */}
      {/* <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/10 bg-black/40 backdrop-blur sticky top-16 z-40">
        <h2 className="text-white font-semibold text-lg">Dashboard</h2>

        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
        >
          <Menu className="text-white w-6 h-6" />
        </button>
      </div> */}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:block w-64 border-r border-white/10 bg-black/20 min-h-screen sticky top-16">
        <nav className="p-6 space-y-2">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
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

      {/* MOBILE SIDEBAR */}
      
    </>
  );
}