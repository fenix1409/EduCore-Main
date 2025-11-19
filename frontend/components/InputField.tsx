import { cn } from '@/lib/utils'

const InputField = ({ type = "text", name, label, value, placeholder, disabled, validation, register, icon }: FormInputProps) => {
    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium text-zinc-200">
                {label}
            </label>
            <div className="relative">
                <div className="absolute left-3 top-3 h-5 w-5 text-zinc-500">{icon}</div>
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    required
                    className={cn("w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-transparent transition-all", { 'opacity-50 cursor-not-allowed': disabled })}
                    {...register(name, validation)}
                />
            </div>
        </div>
    )
}

export default InputField