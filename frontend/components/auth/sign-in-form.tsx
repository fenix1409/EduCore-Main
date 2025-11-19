"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Mail, Lock, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { signInWithEmail } from "@/lib/actions/auth.actions"
import { toast } from "sonner"
import InputField from "../InputField"

export default function SignInForm() {
  const router = useRouter()
  const [loading] = useState(false)
  const [error] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur'
  },);

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);
      if (result.success) router.push('/dashboard');
    } catch (e) {
      console.error(e);
      toast.error('Sign in failed', {
        description: e instanceof Error ? e.message : 'Failed to login a account.'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        toast.error('Sign in failed', {
          description: error
        })
        // <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>
      )}

      <InputField
        icon={<Mail />}
        name="email"
        label="Email"
        placeholder="you@example.com"
        register={register}
        error={errors.email}
        validation={{ required: 'Email required', minLength: 2 }}
      />

      <InputField
        icon={<Lock />}
        type="password"
        name="password"
        label="Password"
        placeholder="••••••••"
        register={register}
        error={errors.password}
        validation={{ required: 'Password required', minLength: 2 }}
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-zinc-300 cursor-pointer">
          <input type="checkbox" className="rounded border-white/20 accent-cyan-400" />
          Remember me
        </label>
        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </button>
    </form>
  )
}
