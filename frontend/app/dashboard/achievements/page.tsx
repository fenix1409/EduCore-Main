import { Award, Trophy, Flame, Star, Zap } from "lucide-react"

export default function AchievementsPage() {
  const achievements = [
    {
      icon: Flame,
      title: "7-Day Streak",
      description: "Completed lessons for 7 consecutive days",
      date: "November 7, 2025",
      rarity: "Common",
      xp: 100,
    },
    {
      icon: Star,
      title: "Perfect Score",
      description: "Scored 100% on JavaScript Fundamentals quiz",
      date: "November 5, 2025",
      rarity: "Rare",
      xp: 250,
    },
    {
      icon: Trophy,
      title: "Course Champion",
      description: "Completed the HTML & CSS Mastery course",
      date: "November 1, 2025",
      rarity: "Epic",
      xp: 500,
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Completed 5 lessons in one day",
      date: "October 30, 2025",
      rarity: "Uncommon",
      xp: 150,
    },
  ]

  const rarityColors = {
    Common: "text-zinc-300",
    Uncommon: "text-green-300",
    Rare: "text-cyan-300",
    Epic: "text-purple-300",
    Legendary: "text-amber-300",
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white" style={{ fontFamily: "Space Grotesk, system-ui" }}>
          Achievements
        </h1>
        <p className="mt-2 text-zinc-400">
          Track your learning milestones and accomplishments
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Achievements", value: "12/36", icon: Trophy },
          { label: "Current Streak", value: "7 days", icon: Flame },
          { label: "Courses Completed", value: "3", icon: Star },
          { label: "Total XP", value: "2,450", icon: Zap },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div
              key={i}
              className="rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/5 p-2.5">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Achievements List */}
      <div className="grid gap-6">
        {achievements.map((achievement, i) => {
          const Icon = achievement.icon
          return (
            <div
              key={i}
              className="group rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-white">{achievement.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs ${rarityColors[achievement.rarity as keyof typeof rarityColors]}`}>
                        {achievement.rarity}
                      </span>
                      <span className="text-xs text-zinc-500">+{achievement.xp} XP</span>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400">{achievement.description}</p>
                  <p className="text-xs text-zinc-500">Unlocked on {achievement.date}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}