"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Mail, Lock, User, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { signUpWithEmail } from "@/lib/actions/auth.actions"
import InputField from "../InputField"
import { toast } from "sonner"

export default function RegisterForm() {
  const router = useRouter()
  const [loading] = useState(false)
  const [error] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onBlur'
  },);

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await signUpWithEmail(data);
      if (result.success) router.push('/dashboard');
    } catch (e) {
      console.error(e);
      toast.error('Sign up failed', {
        description: e instanceof Error ? e.message : 'Failed to create an account.'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>
      )}

      <InputField
        icon={<User />}
        name="fullName"
        label="Full Name"
        placeholder="John Doe"
        register={register}
        error={errors.fullName}
        validation={{ required: 'Full name is required', minLength: 2 }}
      />

      <InputField
        icon={<Mail />}
        name="email"
        label="Email"
        placeholder="you@example.com"
        register={register}
        error={errors.email}
        validation={{ required: 'Email is required', minLength: 2 }}
      />

      <InputField
        icon={<Lock />}
        name="password"
        label="Password"
        placeholder="••••••••"
        register={register}
        error={errors.password}
        validation={{ required: 'Password is required', minLength: 2 }}
      />

      <label className="flex items-center gap-2 text-sm text-zinc-300 cursor-pointer">
        <input type="checkbox" required className="rounded border-white/20 accent-cyan-400" />I agree to the Terms of
        Service and Privacy Policy
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create account"
        )}
      </button>
    </form>
  )
}
