import { auth } from "@/lib/better-auth/auth";
import { Sparkles, TrendingUp, Clock, Target } from "lucide-react"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function OverviewPage() {
    const stats = [
        {
            label: "Course Progress",
            value: "65%",
            icon: TrendingUp,
            description: "Frontend Development",
            change: "+5% from last week",
            trend: "up",
        },
        {
            label: "Learning Streak",
            value: "7 days",
            icon: Clock,
            description: "Keep it up!",
            change: "Best: 12 days",
            trend: "neutral",
        },
        {
            label: "Goals Completed",
            value: "8/12",
            icon: Target,
            description: "Monthly Goals",
            change: "4 remaining",
            trend: "up",
        },
    ]

    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) redirect('/');


    const user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
    }
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-white" style={{ fontFamily: "Space Grotesk, system-ui" }}>
                        Welcome back, {user.name}! 👋
                    </h1>
                    <p className="mt-2 text-zinc-400">
                        Track your progress and continue your learning journey.
                    </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 text-sm text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-colors border border-cyan-500/30">
                    <Sparkles className="h-4 w-4" />
                    Resume Learning
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div
                            key={stat.label}
                            className="group relative rounded-xl p-[1px] transition-all hover:-translate-y-0.5"
                            style={{ background: "linear-gradient(to right, rgba(0,212,255,0.1), rgba(123,97,255,0.1))", }}>
                            <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-6 h-full">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <Icon className="h-5 w-5 text-cyan-300" />
                                            <p className="text-sm font-medium text-zinc-300">{stat.label}</p>
                                        </div>
                                        <p className="mt-4 text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
                                        <p className="mt-1 text-sm text-zinc-400">{stat.description}</p>
                                    </div>
                                    <div className="text-xs text-zinc-500">{stat.change}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Recent Activity */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-white">Recent Activity</h2>
                    <button className="text-sm text-zinc-400 hover:text-white transition-colors">View all</button>
                </div>
                <div className="rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 divide-y divide-white/10">
                    {[
                        {
                            title: "Completed Lesson",
                            description: "JavaScript Fundamentals: Variables & Data Types",
                            time: "2 hours ago",
                        },
                        {
                            title: "Started New Course",
                            description: "React.js - Building Modern UIs",
                            time: "Yesterday",
                        },
                        {
                            title: "Achievement Unlocked",
                            description: "7-Day Learning Streak! 🔥",
                            time: "2 days ago",
                        },
                    ].map((activity, i) => (
                        <div key={i} className="p-4 hover:bg-white/5 transition-colors">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-white">{activity.title}</p>
                                    <p className="mt-1 text-sm text-zinc-400">{activity.description}</p>
                                </div>
                                <span className="text-xs text-zinc-500">{activity.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}