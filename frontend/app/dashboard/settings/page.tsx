"use client"

import { useState } from "react"
import { User, Settings, Bell, Shield, Palette, Globe, CreditCard } from "lucide-react"

const sections = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
    description: "Manage your personal information and account settings"
  },
  {
    id: "preferences",
    label: "Preferences",
    icon: Settings,
    description: "Customize your learning experience and interface settings"
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    description: "Control how and when you receive updates and alerts"
  },
  {
    id: "privacy",
    label: "Privacy & Security",
    icon: Shield,
    description: "Manage your account security and privacy preferences"
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Palette,
    description: "Customize the look and feel of your dashboard"
  },
  {
    id: "language",
    label: "Language & Region",
    icon: Globe,
    description: "Set your preferred language and regional settings"
  },
  {
    id: "billing",
    label: "Billing & Subscription",
    icon: CreditCard,
    description: "Manage your subscription and payment information"
  }
]

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile")

  return (
    <div className="min-h-screen bg-[#0C0C10] text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight" style={{ fontFamily: "Space Grotesk, system-ui" }}>
              Settings
            </h1>
            <p className="mt-2 text-zinc-400">
              Manage your account settings and set preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Navigation Sidebar */}
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === section.id
                      ? "bg-linear-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <section.icon className="h-5 w-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </nav>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-black/50 backdrop-blur-xl ring-1 ring-white/10 rounded-xl p-6">
                {activeSection === "profile" && (
                  <ProfileSection />
                )}
                {activeSection === "preferences" && (
                  <PreferencesSection />
                )}
                {/* Add other sections as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProfileSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium">Profile Settings</h2>
        <p className="text-sm text-zinc-400 mt-1">Update your personal information and profile settings</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300">Profile Picture</label>
          <div className="mt-2 flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <button className="px-4 py-2 text-sm rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
              Change Avatar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300">Email</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300">Bio</label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            placeholder="Tell us about yourself..."
          />
        </div>

        <div className="pt-4">
          <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

function PreferencesSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium">Learning Preferences</h2>
        <p className="text-sm text-zinc-400 mt-1">Customize your learning experience</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300">Learning Path</label>
          <select className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500">
            <option>Frontend Development</option>
            <option>Backend Development</option>
            <option>Full Stack Development</option>
            <option>Machine Learning</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300">Difficulty Level</label>
          <div className="mt-2 space-y-2">
            {["Beginner", "Intermediate", "Advanced"].map((level) => (
              <label key={level} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="difficulty"
                  className="h-4 w-4 border-white/10 bg-white/5 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-sm text-zinc-300">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300">Study Reminders</label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-sm text-zinc-300">Daily progress notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-sm text-zinc-300">Weekly progress summary</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-sm text-zinc-300">Course recommendations</span>
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  )
}