"use client"

import Link from "next/link"
import Background from "@/components/background"
import RegisterForm from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <>
      <Background />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-10 w-10 rounded-lg ring-1 ring-white/15 bg-black/60 relative overflow-hidden">
                <span className="absolute inset-0 conic-gradient" />
                <div className="absolute inset-0.5 rounded bg-[#0C0C10]" />
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Join Educora</h1>
            <p className="text-zinc-400">Start your learning journey today</p>
          </div>

          <RegisterForm />

          <div className="mt-6 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
