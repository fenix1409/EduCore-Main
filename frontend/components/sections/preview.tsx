"use client";
import { ArrowRight, Bot, Play, FileCode, BookOpen, Terminal, Zap, Calendar, Sparkles } from "lucide-react";

export default function Preview() {
  return (
    <div className="text-white">
      <section className="relative mt-16 md:mt-24 lg:mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-[Space_Grotesk]">
              Your personalized learning path
            </h2>
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              Explore the platform <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Glassmorphism dashboard */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-tr from-cyan-400/30 to-violet-400/30">
            <div className="rounded-2xl bg-black/50 backdrop-blur-xl ring-1 ring-white/10">
              <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-white/10 p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                      <Sparkles className="size-4 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Learning Path</div>
                      <div className="text-xs text-zinc-400">Adaptive • AI-guided</div>
                    </div>
                  </div>

                  <nav className="space-y-2">
                    {[
                      { title: "Python for Beginners", progress: 45 },
                      { title: "Frontend Mastery", progress: 18 },
                      { title: "Intro to Machine Learning", progress: 0 },
                    ].map((course, i) => (
                      <button
                        key={i}
                        className={`w-full text-left rounded-lg px-3 py-2 transition-all ${i === 0
                            ? "bg-white/5 ring-1 ring-white/10"
                            : "hover:bg-white/10 ring-1 ring-transparent hover:ring-white/10"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{course.title}</span>
                          <span className="text-xs text-zinc-400">{course.progress}%</span>
                        </div>
                        <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </button>
                    ))}
                  </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 p-4 sm:p-6">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-zinc-400">
                        Current Module
                      </div>
                      <h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight font-[Space_Grotesk]">
                        Python • Variables & Data Types
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition-all">
                        <Bot className="size-4 text-cyan-300" /> Ask AI
                      </button>
                      <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition-all">
                        <Play className="size-4" /> Resume
                      </button>
                    </div>
                  </div>

                  {/* Lesson content cards */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        icon: FileCode,
                        title: "Practice: Variables",
                        desc: "10 tasks • est. 20 min",
                        status: "Recommended",
                        progress: 65,
                      },
                      {
                        icon: BookOpen,
                        title: "Theory: Data Types",
                        desc: "6 lessons • est. 35 min",
                        status: "Next up",
                        progress: 30,
                      },
                      {
                        icon: Terminal,
                        title: "Quiz: Syntax Basics",
                        desc: "12 questions • est. 10 min",
                        status: "Score: 92%",
                        progress: 100,
                      },
                      {
                        icon: Zap,
                        title: "Project: Build a CLI App",
                        desc: "1 project • est. 50 min",
                        status: "Locked",
                        progress: 0,
                      },
                    ].map((card, i) => (
                      <div
                        key={i}
                        className="group relative rounded-xl p-[1px] transition-transform hover:-translate-y-0.5 bg-gradient-to-tr from-cyan-400/30 to-violet-400/30"
                      >
                        <div className="rounded-xl bg-black/50 backdrop-blur-xl ring-1 ring-white/10 p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                <card.icon className="size-4 text-cyan-300" />
                              </div>
                              <div>
                                <div className="text-sm font-medium">{card.title}</div>
                                <div className="text-xs text-zinc-400">{card.desc}</div>
                              </div>
                            </div>
                            <span className="text-xs text-cyan-300">{card.status}</span>
                          </div>
                          <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                              style={{ width: `${card.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-sm text-zinc-400">
                      Daily streak:{" "}
                      <span className="text-white font-medium">5 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-all">
                        <Calendar className="size-4" /> Schedule study
                      </button>
                      <button
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(0,212,255,0.25),0_0_28px_rgba(123,97,255,0.2)]"
                      >
                        Continue learning <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-400 text-center">
            Adaptive pathways, hands-on practice, and AI feedback to help you move faster.
          </p>
        </div>
      </section>
    </div>
  );
}
