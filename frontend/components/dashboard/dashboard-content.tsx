// "use client"
import { auth } from "@/lib/better-auth/auth";
import { TrendingUp, Clock, Zap, Users } from "lucide-react"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const stats = [
  { icon: TrendingUp, label: "Learning Streak", value: "12 days", color: "from-cyan-500 to-blue-500" },
  { icon: Clock, label: "Hours Learned", value: "24.5 hrs", color: "from-purple-500 to-pink-500" },
  { icon: Zap, label: "XP Points", value: "1,240 XP", color: "from-orange-500 to-red-500" },
  { icon: Users, label: "Rank", value: "Top 5%", color: "from-green-500 to-emerald-500" },
]

const courses = [
  { title: "Advanced React Patterns", progress: 65, instructor: "Sarah Chen" },
  { title: "AI Fundamentals", progress: 45, instructor: "Dr. James Wilson" },
  { title: "Python for Data Science", progress: 80, instructor: "Michael Zhang" },
]

export default async function DashboardContent() {
  const session = await auth.api.getSession({ headers: await headers() });
      if (!session?.user) redirect('/');
  
  
      const user = {
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
      }
  return (
    <main className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
        <p className="text-zinc-400">Here's your learning progress this week</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5"
          >
            <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <p className="text-zinc-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Active Courses */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6">Active Courses</h2>
        <div className="space-y-4">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold mb-1">{course.title}</h3>
                  <p className="text-sm text-zinc-400">{course.instructor}</p>
                </div>
                <span className="text-sm font-medium text-cyan-400">{course.progress}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 border border-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
