import { BookOpen } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      title: "Frontend Development Path",
      progress: 65,
      totalLessons: 48,
      completedLessons: 31,
      status: "In Progress",
      lastAccessed: "2 hours ago",
    },
    {
      title: "JavaScript Fundamentals",
      progress: 100,
      totalLessons: 36,
      completedLessons: 36,
      status: "Completed",
      lastAccessed: "1 week ago",
    },
    {
      title: "React.js Masterclass",
      progress: 25,
      totalLessons: 52,
      completedLessons: 13,
      status: "In Progress",
      lastAccessed: "Yesterday",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white" style={{ fontFamily: "Space Grotesk, system-ui" }}>
          My Courses
        </h1>
        <p className="mt-2 text-zinc-400">
          Track your progress across all enrolled courses
        </p>
      </div>

      <div className="grid gap-6">
        {courses.map((course, i) => (
          <div
            key={i}
            className="group rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/5 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-cyan-300" />
                  <h3 className="font-medium text-white">{course.title}</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                course.status === "Completed" 
                  ? "bg-emerald-500/20 text-emerald-300"
                  : "bg-cyan-500/20 text-cyan-300"
              }`}>
                {course.status}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Progress</span>
                <span className="text-white">{course.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div 
                  className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500 transition-all" 
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Last accessed {course.lastAccessed}</span>
              <button className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}