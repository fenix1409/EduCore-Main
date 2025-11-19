import { Target, CheckCircle2, Circle } from "lucide-react"

export default function GoalsPage() {
  const goals = [
    {
      title: "Complete Frontend Development Path",
      description: "Master HTML, CSS, JavaScript, and React",
      deadline: "December 31, 2025",
      progress: 65,
      milestones: [
        { text: "Complete HTML & CSS Basics", completed: true },
        { text: "Master JavaScript Fundamentals", completed: true },
        { text: "Build 3 React Projects", completed: false },
        { text: "Learn State Management", completed: false },
      ],
    },
    {
      title: "Build Portfolio Website",
      description: "Create a personal portfolio showcasing projects",
      deadline: "November 30, 2025",
      progress: 30,
      milestones: [
        { text: "Design Mockup", completed: true },
        { text: "Setup Project Structure", completed: true },
        { text: "Implement Core Features", completed: false },
        { text: "Deploy Website", completed: false },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white" style={{ fontFamily: "Space Grotesk, system-ui" }}>
          Learning Goals
        </h1>
        <p className="mt-2 text-zinc-400">
          Track your progress towards your learning objectives
        </p>
      </div>

      <div className="grid gap-6">
        {goals.map((goal, i) => (
          <div
            key={i}
            className="group rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 p-6"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-cyan-300" />
                  <h3 className="font-medium text-white">{goal.title}</h3>
                </div>
                <p className="text-sm text-zinc-400">{goal.description}</p>
              </div>
              <span className="text-xs text-zinc-500">Due {goal.deadline}</span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Progress</span>
                <span className="text-white">{goal.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500 transition-all" 
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-sm font-medium text-white">Milestones</h4>
              <div className="space-y-2">
                {goal.milestones.map((milestone, j) => (
                  <div key={j} className="flex items-center gap-2">
                    {milestone.completed ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Circle className="h-4 w-4 text-zinc-600" />
                    )}
                    <span className={`text-sm ${milestone.completed ? "text-zinc-300" : "text-zinc-400"}`}>
                      {milestone.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}